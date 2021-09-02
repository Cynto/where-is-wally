import React from 'react';
import firebase from '../../Firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions'

function CharOptions(props: any) {
  const { xCord, yCord, charsFound, setCharsFound } = props;
  const handleCorrectChoice = (char: string) => {
    const charDiv: any = document.getElementById(`choice-${char}`);
    charDiv.style.display = 'none';

    const charImg: any = document.getElementById(`img-${char}`);
    charImg.style.opacity = '30%';

    const charText: any = document.getElementById(`text-${char}`);
    charText.style.opacity = '30%';
    setCharsFound(charsFound + 1)
  };

  const handleChoice = (char: string) => {
    const data = { char, xCord, yCord };
    const checkCords = firebase.functions().httpsCallable('checkCords');
    checkCords(data)
      .then((result) => {
        if (result.data === true) {
          console.log(result.data);
          handleCorrectChoice(char);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="char-options" id="char-options">
      <div
        id="choice-wally"
        className="icon-name"
        onClick={() => handleChoice('wally')}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/waldo.jpg?alt=media&token=dcac5a4b-4465-4587-9897-0c042f59e7ba"
          alt="Book character Wally"
        />
        <p>Wally</p>
      </div>
      <div
        id="choice-odlaw"
        className="icon-name"
        onClick={() => handleChoice('odlaw')}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/odlaw.jpg?alt=media&token=4f89682f-0ea9-4918-83dd-03403b610ed3"
          alt="Book character odlaw"
        />
        <p>Odlaw</p>
      </div>
      <div
        id="choice-wizard"
        className="icon-name"
        onClick={() => handleChoice('wizard')}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/wizard.jpeg?alt=media&token=1b5ce2d0-ab6f-4cdf-b76f-ffc56bc08f2d"
          alt="Book character Wizard"
        />
        <p>Wizard</p>
      </div>
      <div
        id="choice-wenda"
        className="icon-name"
        onClick={() => handleChoice('wenda')}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/where-is-wally-30eb4.appspot.com/o/wenda.jpeg?alt=media&token=daafaf96-7bb9-45b2-ba30-5b348b2e12cd"
          alt="Book character Wenda"
        />
        <p>Wenda</p>
      </div>
    </div>
  );
}

export default CharOptions;
