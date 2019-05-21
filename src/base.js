import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCcqUjyTR0MhH-e5XA1GROswsJTe0uFrUs",
  authDomain: "write-d85e3.firebaseapp.com",
  databaseURL: "https://write-d85e3.firebaseio.com",
  projectId: "write-d85e3",
  storageBucket: "write-d85e3.appspot.com",
  messagingSenderId: "483821876508",
  appId: "1:483821876508:web:3a74b53d15529b71"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export { base };