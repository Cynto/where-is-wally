import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ui } from '../../Firebase';
import firebase from '../../Firebase';
import 'firebase/firestore';
import 'firebase/auth';
import './homepage.css';

function HomePage(props: any) {
  const { username, setUsername } = props;
  const nameRef = useRef(document.createElement('input'));

  const auth = firebase.auth();
  const db = firebase.firestore();

  const usersRef = db.collection('users');

  const handleSubmit = () => {
    const username = nameRef.current.value;
    if (username !== '') {
      setUsername(nameRef.current.value);
      const { serverTimestamp } = firebase.firestore.FieldValue;
      const userRef = db.collection('users').doc(username);
      userRef.get().then((docSnapshot: any) => {
        if (!docSnapshot.exists) {
          usersRef.doc(username).set({
            username,
            createdAt: serverTimestamp(),
          });
        } else {
          setUsername(docSnapshot.data()?.username);
        }
      });
    }
  };
  
  return (
    <div className="homepage">
      <div className="form-container">
        {username === '' ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="group">
              <input ref={nameRef} type="text" required></input>

              <label>Username:</label>
            </div>
            <br />

            <button type="submit">Confirm Username</button>
          </form>
        ) : (
          <div className="enter-div">
            <h3>Username: {username}</h3>
            <Link to="/game">
              <button>Play Game</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
