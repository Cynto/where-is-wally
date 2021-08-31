const functions = require('firebase-functions');

const Firestore = require('@google-cloud/firestore');
const firestore = new Firestore({
  projectID: 'where-is-wally-30eb4',
});

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

exports.checkCords = functions.https.onCall(async (data, context) => {
  const char = data.char;
  const xPick = data.xCord;
  const yPick = data.yCord;
  let xReal = 0;
  let yReal = 0;

  const docRef = admin.firestore().collection('charCords').doc(char);

  return docRef.get().then((doc) => {
    if (doc.exists) {
      xReal = doc.data().x;
      yReal = doc.data().y;
      if (
        yPick > yReal - 50 &&
        yPick < yReal + 50 &&
        xPick > xReal - 50 &&
        xPick < xReal + 50
      ) {
        return true;
      } else return false;
    } else return false;
  });
});
