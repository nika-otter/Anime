import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app, googleAuthProvider } from "./firebase";
const Login = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
  const login = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((credentials) => setUser(credentials.user))
      .catch((e) => console.error(e));
  };
  return (
    <>
      {user != null ? (
        <button>Logout</button>
      ) : (
        <button onClick={login}>Login by Google</button>
      )}
    </>
  );
};

export default Login;
