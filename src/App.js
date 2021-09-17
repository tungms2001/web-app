import React, { useRef, useState } from 'react';
import './styles/app.css';
import './styles/chatroom.css';
import firebaseSvg from './assets/svg/firebase.svg';
import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "AIzaSyAbk5lnOll0YvMhfyNyVhNkZ5NVaDGU_1Y",
  authDomain: "appchat-86413.firebaseapp.com",
  projectId: "appchat-86413",
  storageBucket: "appchat-86413.appspot.com",
  messagingSenderId: "601574135744",
  appId: "1:601574135744:web:0e0363b4047dc0996c5a25",
  measurementId: "G-1XKRHK7HJ8"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className='app'>
      <img src={firebaseSvg} alt='Nearly transparent firebase' className='firebase' />
      {(user) ?
        <ChatRoom auth={auth} firestore={firestore} /> :
        <SignIn auth={auth} firestore={firestore} />}
    </div>
  );
};
export default App;
