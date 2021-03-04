import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDaqOX_xqq87490eNpEvKbj1zXLq0VnjSw",
  authDomain: "cozastore-c93d8.firebaseapp.com",
  projectId: "cozastore-c93d8",
  storageBucket: "cozastore-c93d8.appspot.com",
  messagingSenderId: "592773306513",
  appId: "1:592773306513:web:1e00da57d4d89ade2ac730",
  measurementId: "G-X69KHBE81N"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase
}