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
const Favourite = () => {
  const [usersFav, setUsersFav] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      let users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      let searchItem = setUsersFav(
        users.find((user) => user.id === searchItem)
      );
    };

    getUser();
  }, []);

  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  console.log(user + "вивожу юзера ");

  console.log(user);
  const { fetchAnime } = useActions();
  const { anime, loading, error } = useSelector((state) => state.anime);
  // useEffect(() => {
  //   fetchAnime();
  // }, []);
  const getFavourite = () => {
    let animes = [];
    for (let i = 0; i < user.length; i++) {
      animes.push(fetchAnime(user[i]));
    }
    return animes;
  };
  console.log(getFavourite() + "favourite");
  return (
    <>
      <Header />
      <span>Favourite</span>
      <Footer />
    </>
  );
};

export default Favourite;
