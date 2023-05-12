import classes from "./LinkButton.module.scss";
import { useState } from "react";
import { getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { app, googleAuthProvider } from "../firebase";
const ButtonLogin = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});

  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  const login = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((credentials) => setUser(credentials.user))
      .catch((e) => console.error(e));
    console.log(credentials);
  };
  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <>
      {user != null ? (
        <button className={classes.link_button} onClick={logout}>
          Logout
        </button>
      ) : (
        <button className={classes.link_button} onClick={login}>
          Login by Google
        </button>
      )}
    </>
  );
};

export default ButtonLogin;
