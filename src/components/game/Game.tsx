import React, { useEffect, useState } from 'react';
import './game.css';

function Game(props: any) {
  const [xCord, setxCord] = useState(0);
  const [yCord, setyCord] = useState(0);

  const handleChoice = (char: string) => {

  };
  const handleClick = (e: any) => {
    let img = e.target.getBoundingClientRect();
    let x = e.clientX - img.left;
    let y = e.clientY - img.top;
    console.log('x: ' + x);
    console.log('y: ' + y);
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
  };
  useEffect(() => {
    document.addEventListener('click', (e: any) => {
      if (e.target.toString() !== '[object HTMLImageElement]') {
        const circle: any = document.getElementById('circle');
        circle.style.display = 'none';
        const charOptions: any = document.getElementById('char-options');
        charOptions.style.display = 'none';
      }
    });
  }, []);
  return (
    <div className="game-page" id="game-page">
      <div className="char-container">
        <div className="char">
          <img src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/waldo.jpg?alt=media&token=dcac5a4b-4465-4587-9897-0c042f59e7ba" />
          <h4>Wally</h4>
        </div>
        <div className="char">
          <img src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/odlaw.jpg?alt=media&token=4f89682f-0ea9-4918-83dd-03403b610ed3" />
          <h4>Odlaw</h4>
        </div>
        <div className="char">
          <img src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/wizard.jpeg?alt=media&token=1b5ce2d0-ab6f-4cdf-b76f-ffc56bc08f2d" />
          <h4>Wizard</h4>
        </div>
        <div className="char">
          <img src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/wenda.jpeg?alt=media&token=daafaf96-7bb9-45b2-ba30-5b348b2e12cd" />
          <h4>Wenda</h4>
        </div>
      </div>
      <div className="img-container">
        {' '}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/level-1.png?alt=media&token=44c0daf6-641e-4377-8393-2de606838a3f"
          onClick={(e) => handleClick(e)}
        />
        <div className="circle" id="circle"></div>
        <div className="char-options" id="char-options">
          <div className="icon-name">
            <img src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/waldo.jpg?alt=media&token=dcac5a4b-4465-4587-9897-0c042f59e7ba" />
            <p>Wally</p>
          </div>
          <div className="icon-name">
            <img src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/odlaw.jpg?alt=media&token=4f89682f-0ea9-4918-83dd-03403b610ed3" />
            <p>Odlaw</p>
          </div>
          <div className="icon-name">
            <img src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/wizard.jpeg?alt=media&token=1b5ce2d0-ab6f-4cdf-b76f-ffc56bc08f2d" />
            <p>Wizard</p>
          </div>
          <div className="icon-name">
            <img src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/wenda.jpeg?alt=media&token=daafaf96-7bb9-45b2-ba30-5b348b2e12cd" />
            <p>Wenda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
