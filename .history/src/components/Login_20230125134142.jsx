import classes from "./LinkButton.module.scss";
import { useState } from "react";
import { getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { app, googleAuthProvider } from "../firebase";
import { getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
const Login = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});
  const TryTODO = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        favourite: ["8393", "9384", "9300"],
        id: user.uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  //   const createUsersDB = async (userInfo) => {
  //     await getDoc(userInfo?.uid, { favourite: ["4843", "92992"] });
  //   };
  const login = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then((credentials) => {
        setUser(credentials.user);
        // createUsersDB(credentials.user);
        // console.log(credentials);
      })()
      .catch((e) => console.error(e));
    console.log(user);
    TryTODO();
  };
  const logout = async () => {
    await auth.signOut();

    console.log(user);
    setUser(null);
  };

  return (
    <>
      {user != null ? (
        <button className={classes.link_button} onClick={logout}>
          Logout {user.displayName}
        </button>
      ) : (
        <button className={classes.link_button} onClick={login}>
          Login by Google
        </button>
      )}
    </>
  );
};

export default Login;
