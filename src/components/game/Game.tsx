import React, { useEffect, useState } from 'react';
import './game.css';
import CharOptions from '../charOptions/CharOptions';
import StopWatch from '../stopWatch/StopWatch';
import SetUsername from '../setUsername/SetUsername';

function Game(props: any) {
  const [username, setUsername] = useState('');

  const [xCord, setxCord] = useState(0);
  const [yCord, setyCord] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [charsFound, setCharsFound] = useState(0);
  const [time, setTime] = useState(0);
  const [timeEdit, setTimeEdit] = useState('');


  const handleClick = (e: any) => {
    if (!gameComplete) {
      let img = e.target.getBoundingClientRect();
      let x = e.clientX - img.left;
      let y = e.clientY - img.top;

      setxCord(x);
      setyCord(y);

      const circle: any = document.getElementById('circle');
      circle.style.display = 'block';

      circle.style.position = 'absolute';
      circle.style.left = e.pageX - 40 + 'px';
      circle.style.top = e.pageY - 118 + 'px';

      const gamePage: any = document.getElementById('game-page');
      gamePage.style.position = 'relative';
      gamePage?.appendChild(circle);

      const charOptions: any = document.getElementById('char-options');
      charOptions.style.display = 'block';
      charOptions.style.position = 'absolute';
      charOptions.style.left = e.pageX - 50 + 'px';
      charOptions.style.top = e.pageY - 35 + 'px';
    }
  };
  useEffect(() => {
    if (charsFound === 4) {
      const timeArray = ('0' + time).split('');

      timeArray.shift();
      timeArray.splice(-1, 1);
      const timeDot = timeArray.join('');

      setGameComplete(true);
      setTimeEdit(timeDot);
    }
  }, [charsFound]);
  useEffect(() => {
    document.addEventListener('click', (e: any) => {
      if (e.target.toString() !== '[object HTMLImageElement]') {
        const circle: any = document.getElementById('circle');
        if (circle !== null) {
          circle.style.display = 'none';
        }
        const charOptions: any = document.getElementById('char-options');
        if (charOptions !== null) {
          charOptions.style.display = 'none';
        }
      }
    });
  }, []);
  return (
    <div className="game-page" id="game-page">
      {gameComplete ? (
        <div>
          <StopWatch
            time={time}
            setTime={setTime}
            gameComplete={gameComplete}
          />
          <div className="username-container">
            {' '}
            <SetUsername
              timeEdit={timeEdit}
              username={username}
              setUsername={setUsername}
            />{' '}
          </div>
        </div>
      ) : (
        <div>
          <StopWatch
            time={time}
            setTime={setTime}
            gameComplete={gameComplete}
          />
          <div className="char-container">
            <div className="char">
              <img
                id="img-wally"
                src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/waldo.jpg?alt=media&token=dcac5a4b-4465-4587-9897-0c042f59e7ba"
                alt="Book character Wally"
              />
              <h4 id="text-wally">Wally</h4>
            </div>
            <div className="char">
              <img
                id="img-odlaw"
                src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/odlaw.jpg?alt=media&token=4f89682f-0ea9-4918-83dd-03403b610ed3"
                alt="Book character Odlaw"
              />
              <h4 id="text-odlaw">Odlaw</h4>
            </div>
            <div className="char">
              <img
                id="img-wizard"
                src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/wizard.jpeg?alt=media&token=1b5ce2d0-ab6f-4cdf-b76f-ffc56bc08f2d"
                alt="Book character Wizard"
              />
              <h4 id="text-wizard">Wizard</h4>
            </div>
            <div className="char">
              <img
                id="img-wenda"
                src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/wenda.jpeg?alt=media&token=daafaf96-7bb9-45b2-ba30-5b348b2e12cd"
                alt="Book character Wenda"
              />
              <h4 id="text-wenda">Wenda</h4>
            </div>
          </div>
          <div className="img-container">
            {' '}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/level-1.png?alt=media&token=44c0daf6-641e-4377-8393-2de606838a3f"
              onClick={(e) => handleClick(e)}
              alt="Where's wally"
            />
            <div className="circle" id="circle"></div>
            <CharOptions
              charsFound={charsFound}
              setCharsFound={setCharsFound}
              xCord={xCord}
              yCord={yCord}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
