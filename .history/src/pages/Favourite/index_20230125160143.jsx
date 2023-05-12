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
  const [input, setInput] = useState("");
  return (
    <>
      <Header />
      <span>chat</span>
      <input onChange={(event) => setInput(event.target.value)} type="text" />
      <button onClick={() => console.log(input)}>submit</button>
      <Footer />
    </>
  );
};

export default Favourite;
