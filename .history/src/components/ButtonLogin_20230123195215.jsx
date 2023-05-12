import classes from "./LinkButton.module.scss";
import { useState } from "react";
import { getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { app, googleAuthProvider } from "../firebase";
const ButtonLogin = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(auth.currentUser);
  });
  const login = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((credentials) => {
        setUser(credentials.user);
        console.log(credentials);
      })
      .catch((e) => console.error(e));
  };
  const logout = () => {
    auth.signOut();
    console.log(user);
    // setUser(null);
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

export default ButtonLogin;
