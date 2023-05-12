import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { collection } from "firebase/firestore/lite";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
const Favourite = () => {
  const [user, setUser] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const detUser = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    };
  }, []);
  return (
    <>
      <Header />
      <span>Favourite</span>
      <Footer />
    </>
  );
};

export default Favourite;
