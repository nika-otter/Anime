import classes from "./Buttons/LinkButton.module.scss";
import { useState } from "react";
import { getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { app, googleAuthProvider } from "../firebase";
import { getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

const LoginComponent = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState([]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(() => {
      return currentUser;
    });
  });

  const login = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then((credentials) => {
        setUser(credentials.user);
        // // setUser("aaaaaaaaaaaaaaaaaaaaaaa");
        // writeUserData(credentials.user);
      })
      .catch((e) => console.error(e));
    console.log("user");
    console.log(user);
    console.log("user");
  };
  const logout = async () => {
    await auth.signOut();

    // console.log(user);
    setUser([]);
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

export default LoginComponent;
