import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
// import { collection } from "firebase/firestore/lite";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useActions } from "../../hooks/UseActions";
import { useSelector } from "react-redux";
import { async } from "@firebase/util";
import AnimeCardList from "../../components/AnimeCardList";
const Favourite = () => {
  const [usersFav, setUsersFav] = useState();
  const usersCollectionRef = collection(db, "users");

  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  // const findUser = async (users, searchId) => {
  //   let userById = await users.find((user) => user.id === searchId);
  //   return await userById;
  // };
  let animes = [];
  const getFavourite = () => {
    for (let i = 0; i < usersFav.length; i++) {
      animes.push(fetchAnime(usersFav[i]));
    }
  };
  const getUserById = async () => {
    const data = await getDocs(usersCollectionRef);
    console.log(data);
    let users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(users);
    let searchId = user.uid; //"v1pyeLF3XxbFRnmzgoccg5umc4k2";//ід чела чий акк
    console.log(searchId);
    let userById = users.find((user) => user.id === searchId);
    setUsersFav(userById);
    // setUsersFav(users.find((user) => user.id === searchId));
    // let find = findUser(users, searchId);
    // setUsersFav(find);
    console.log(userById);
  };
  useEffect(async () => {
    // console.log(user);
    // console.log("user");

    await getUserById();
    getFavourite();
  }, []);
  console.log(usersFav);
  const { fetchAnime } = useActions();
  const { anime, loading, error } = useSelector((state) => state.anime);
  // useEffect(() => {
  //   fetchAnime();
  // }, []);
  console.log("favourite");
  console.log(animes);
  console.log("favourite");
  return (
    <>
      <Header />
      <span>Favourite</span>
      <AnimeCardList animes={animes} />
      <Footer />
    </>
  );
};

export default Favourite;
