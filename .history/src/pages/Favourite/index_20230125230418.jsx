import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useRef, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
// import { collection } from "firebase/firestore/lite";
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useActions } from "../../hooks/UseActions";
import { useSelector } from "react-redux";
import { async } from "@firebase/util";
import AnimeCardList from "../../components/AnimeCardList";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// import { collection, addDoc } from "firebase/firestore";
const Favourite = () => {
  // console.log(user);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      photoURL:
        "https://lh3.googleusercontent.com/a/AEdFTp7bNgdArVv1NjAitBHQLKgAOBzUlLUxNY4zzBEz=s96-c",
      text: "спроба3",
      email: "yovbak.nika@student.uzhnu.edu.ua",
      id: "EHBgBDucvATwfF3MqJVM",
    },

    {
      photoURL:
        "https://lh3.googleusercontent.com/a/AEdFTp7bNgdArVv1NjAitBHQLKgAOBzUlLUxNY4zzBEz=s96-c",
      email: "yovbak.nika@student.uzhnu.edu.ua",
      text: "k",
      id: "h3Ga40cmOSBzZ3YcOcOW",
    },
  ]);

  const sendMessage = async (e) => {
    // e.preventDefault();

    const { email, photoURL } = auth.currentUser;

    try {
      const docRef = await addDoc(collection(db, "users"), {
        text: input,
        // createdAt: db.FieldValue.serverTimestamp(),
        email,
        photoURL,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const auth = getAuth(app);
  // const [user] = useAuthState(auth);
  const usersCollectionRef = collection(db, "users");
  const displayMessages = async () => {
    const data = await getDocs(usersCollectionRef);
    console.log("data");
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("data");
    setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    // displayMessages();
  }, []);
  // console.log("niki");

  return (
    <>
      <Header />

      <form onSubmit={sendMessage}>
        <input onChange={(event) => setInput(event.target.value)} type="text" />
        <button type="submit">submit</button>
      </form>
      <div>aaaaaaa</div>
      {messages.map((message) => {
        <span key={message.text}>{message.text}</span>;
        <div key={message.text}>1111</div>;
        console.log(message.text);
      })}
      <div>fffffffffff</div>
      <Footer />
    </>
  );
};

export default Favourite;
