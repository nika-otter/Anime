import classes from "./LinkButton.module.scss";
import { useState } from "react";
import { getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { app, googleAuthProvider } from "../firebase";
import { getDoc } from "firebase/firestore";
const Login = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const createUsersDB = async (userInfo) => {
    await getDoc(userInfo?.uid, { favourite: ["4843", "92992"] });
  };
  const login = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then((credentials) => {
        setUser(credentials.user);
        // createUsersDB(credentials.user);
        // console.log(credentials);
      })()
      .catch((e) => console.error(e));
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
