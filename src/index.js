import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyDs_3qbaI2kcfTFuGpCQjf-AQv_2Z6NtvQ",
    authDomain: "netflix-clone-82bb0.firebaseapp.com",
    projectId: "netflix-clone-82bb0",
    storageBucket: "netflix-clone-82bb0.appspot.com",
    messagingSenderId: "448463492148",
    appId: "1:448463492148:web:ef668c8401571391f2a661"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
