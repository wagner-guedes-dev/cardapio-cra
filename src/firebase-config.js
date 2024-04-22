// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwY8CNprWIM-wJILk9TKYLSMZtq9BJ2Uk",
  authDomain: "gerenciador-de-manutencoes.firebaseapp.com",
  projectId: "gerenciador-de-manutencoes",
  storageBucket: "gerenciador-de-manutencoes.appspot.com",
  messagingSenderId: "1097435576159",
  appId: "1:1097435576159:web:658fcad24225ef391b68ea"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };

