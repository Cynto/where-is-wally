import firebase from 'firebase/app';
var firebaseui = require('firebaseui');
// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDUOeiZGxtcpgT65vUYfYHxS1rJxQl2_44',
  authDomain: 'where-is-wally-30eb4.firebaseapp.com',
  projectId: 'where-is-wally-30eb4',
  storageBucket: 'where-is-wally-30eb4.appspot.com',
  messagingSenderId: '1030507379980',
  appId: '1:1030507379980:web:a826cec6d18ece2bfc1d29',
});
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
export { ui };
export default firebase;
