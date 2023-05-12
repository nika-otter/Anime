import { useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";

const Login = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
  const login = () => {
    if (user == null) {
    }
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
