import React, {useEffect, useState, useRef} from "react";
import ReactDOM from "react-dom/client";

import {initializeApp} from "firebase/app";
import {getAuth, signOut, signInWithRedirect, GoogleAuthProvider} from "firebase/auth";
import {getFirestore, collection, query, orderBy, addDoc, Timestamp} from "firebase/firestore";
import {getAnalytics} from "firebase/analytics";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

import "./logo.svg";
import "./logo-192x192.png";
import "./logo-512x512.png";
import "./manifest.json";

const firebase = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
});
const authentication = getAuth(firebase);
const firestore = getFirestore(firebase);
getAnalytics(firebase);

const App = () => {
  const dummy = useRef(null);

  const [user] = useAuthState(authentication);
  const messagesReference = collection(firestore, "messages");
  const [messages] = useCollectionData(query(messagesReference, orderBy("time")));
  const [text, setText] = useState("");

  const userSignIn = async () => await signInWithRedirect(authentication, new GoogleAuthProvider());
  const userSignOut = async () => await signOut(authentication);
  const alterText = (event) => setText(event.target.value);
  const sendText = async (event) => {
    event.preventDefault();
    await addDoc(messagesReference, {
      time: Timestamp.fromDate(new Date()),
      uid: user.uid,
      photoURL: user.photoURL,
      text
    });
    setText("");
  };

  useEffect(() => {
    setTimeout(async () => await dummy.current?.scrollIntoView({behavior: "smooth"}), 0);
  }, [messages]);

  return (
    <React.StrictMode>
      <header className="header">
        <i className="logo material-symbols-outlined">forum</i>
        <h1 className="title">Superchat</h1>
        {user && <button className="sign-out material-symbols-outlined" onClick={userSignOut}>logout</button>}
      </header>
      <section className="section">
        {user && (
          <>
            <main className="main">
              {messages && messages.map((data) => (
                <div className={`data ${(user.uid == data.uid) ? "data-sent" : "data-received"}`} key={data.time}>
                  <img className="data_photo" src={data.photoURL}/>
                  <p className="data_text" dangerouslySetInnerHTML={{__html: data.text.replaceAll("\n", "<br/>")}}></p>
                </div>
              ))}
              <div ref={dummy}></div>
            </main>
            <form className="form" onSubmit={sendText}>
              <textarea className="textarea" type="text" placeholder="Message" autoFocus value={text} onChange={alterText}></textarea>
              <button className="submit material-symbols-outlined" type="submit" disabled={!text}>send</button>
            </form>
          </>
        )}
        {!user && (
          <button className="sign-in" onClick={userSignIn}>
            <i className="sign-in_icon">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48" width="18px" height="18px">
                <g>
                  <path fill="#ea4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285f4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#fbbc05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34a853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
            </i>
            <span className="sign-in_text">Sign in with Google</span>
          </button>
        )}
      </section>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.querySelector(".app")).render(<App/>);

if (!import.meta.env.DEV && "serviceWorker" in navigator) {
  (await navigator.serviceWorker.ready).unregister();
}
