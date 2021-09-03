import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import 'firebase/firestore';
import 'firebase/auth';
import './setUsername.css';

function SetUsername(props: any) {
  const { username, setUsername, timeEdit } = props;
  const nameRef = useRef(document.createElement('input'));

  const db = firebase.firestore();

  const usersRef = db.collection('users');
  const leaderboardRef = db.collection('leaderboard');
  const handleSubmit = () => {
    const usernameRef = nameRef.current.value;
    if (usernameRef !== '') {
      setUsername(nameRef.current.value);
      const { serverTimestamp } = firebase.firestore.FieldValue;
      const userRef = db.collection('users').doc(usernameRef);
      userRef.get().then((docSnapshot: any) => {
        if (!docSnapshot.exists) {
          usersRef.doc(usernameRef).set({
            usernameRef,
            createdAt: serverTimestamp(),
          });
        }
      });
      leaderboardRef.add({
        username: usernameRef,
        time: Number(timeEdit),
      });
    }
  };
  return (
    <div className="form-container">
      {username === '' ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="group">
            <input maxLength={12} ref={nameRef} type="text" required></input>

            <label>Username:</label>
          </div>
          <br />

          <button className="css-button-3d--sky" type="submit">
            Confirm Username
          </button>
        </form>
      ) : (
        <div className="enter-div">
          <h3>Username: {username}</h3>
          <Link to="/leaderboard">
            <button className="css-button-3d--red">Show Leaderboard</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default SetUsername;
