import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
// import { collection } from "firebase/firestore/lite";
import { db } from "../../firebase";
import { collection, getDocs, addDoc, firestore } from "firebase/firestore";
import { useActions } from "../../hooks/UseActions";
import { useSelector } from "react-redux";
import { async } from "@firebase/util";
import AnimeCardList from "../../components/AnimeCardList";
// import { collection, addDoc } from "firebase/firestore";
const Favourite = () => {
  // console.log(user);
  // const [input, setInput] = useState("");
  // const [messages, setMessages] = useState([]);

  // // const messagesRef = firestore.collection("messages");
  // // const query = messagesRef.orderBy("createdAt").limit(25);

  // // const [messages] = useCollectionData(query, { idField: "id" });
  // const sendMessage = async (e) => {
  //   e.preventDefault();

  //   const { email, photoURL } = auth.currentUser;

  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       text: input,
  //       // createdAt: db.FieldValue.serverTimestamp(),
  //       email,
  //       photoURL,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  //   // await messagesRef.add({
  //   //   text: input,
  //   //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //   //   uid,
  //   //   photoURL,
  //   // });
  //   // e.preventDefault();

  //   // try {
  //   //   const docRef = await addDoc(collection(db, "users"), {
  //   //     message: input,
  //   //     id: user.email,
  //   //     img: user.photoURL,
  //   //   });
  //   //   console.log("Document written with ID: ", docRef.id);
  //   // } catch (e) {
  //   //   console.error("Error adding document: ", e);
  //   // }
  // };
  // const auth = getAuth(app);
  // // const [user] = useAuthState(auth);
  // const usersCollectionRef = collection(db, "users");
  // const displayMessages = async () => {
  //   const data = await getDocs(usersCollectionRef);
  //   console.log("data");
  //   console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   console.log("data");
  //   setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };
  // useEffect(() => {
  //   displayMessages();
  // }, []);
  // console.log("niki");

  const dummy = useRef();
  const messagesRef = firestore.collection("users");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      {/* {messages.map((message) => (
        <div>{message.message}</div>
      ))}
      <form onSubmit={sendMessage}>
        <input onChange={(event) => setInput(event.target.value)} type="text" />
        <button type="submit">submit</button>
      </form> */}

      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Favourite;
