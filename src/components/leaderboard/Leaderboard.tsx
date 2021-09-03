import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './leaderboard.css';
import firebase from '../../Firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';
import uniqid from 'uniqid'

function Leaderboard() {
  const [recordArray, setRecordArray] = useState([]);

  const db = firebase.firestore();
  const leaderboardRef = db.collection('leaderboard');

  useEffect(() => {
    leaderboardRef
      .orderBy('time')
      .get()
      .then((querySnapshot) => {
        let records: any = [];
        querySnapshot.forEach((doc) => {
          const timeArray = (doc.data().time + '0').split('');
          timeArray.splice(-1, 1);
          timeArray.splice(-2, 0, '.');
          const time = timeArray.join('');

          const object = {
            username: doc.data().username,
            time,
          };

          records.push(object);
        });
        setRecordArray(records);
      });
  }, []);
  useEffect(() => {}, [recordArray]);

  return (
    <div className="leaderboard-page">
      <Link to="/game">
        <button className="css-button-3d--sky">Play Again</button>
      </Link>
      <div className="leaderboard-container">
        <div className="leaderboard">
          <h2>Leaderboard</h2>
          <div className="name-time spaced-content">
            <p>NAME</p>
            <p>TIME(Seconds)</p>
          </div>
          <div className="records-container">
            {recordArray.map((record: any) => (
              <div key={uniqid()}>
                {record.username ? (
                  <div className="record spaced-content">
                    <p>{record.username}</p>
                    <span>{record.time}</span>{' '}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
