import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
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
// import { collection, addDoc } from "firebase/firestore";

const Favourite = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  console.log(user);
  const [input, setInput] = useState("");
  const sendMessage = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        message: input,
        id: user.email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <>
      <Header />
      <span>chat</span>
      <input onChange={(event) => setInput(event.target.value)} type="text" />
      <button onClick={sendMessage}>submit</button>
      <Footer />
    </>
  );
};

export default Favourite;
