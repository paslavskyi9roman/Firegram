import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAvoSlLlgwDXSoRKWSW61IRBjMo5ClYKMI',
  authDomain: 'rom-firegram.firebaseapp.com',
  databaseURL: 'https://rom-firegram.firebaseio.com',
  projectId: 'rom-firegram',
  storageBucket: 'rom-firegram.appspot.com',
  messagingSenderId: '18051051212',
  appId: '1:18051051212:web:ceba7946f23af6bbfe5c69',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
