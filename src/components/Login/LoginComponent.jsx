import classes from "./LoginComponent.module.scss";
import { useState } from "react";
import { getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { app, googleAuthProvider } from "../../firebase";
import UserInfo from "../UserInfo/UserInfo";

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
      })
      .catch((e) => console.error(e));
  };

  const logout = async () => {
    await auth.signOut();
    setUser([]);
  };

  return (
    <>
      {!user ? (
        <>
          <UserInfo user={user} />
          <button className={classes.log_button} onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <button className={classes.log_button} onClick={login}>
          Login by Google
        </button>
      )}
    </>
  );
};

export default LoginComponent;
