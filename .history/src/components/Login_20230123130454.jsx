import { useContext } from "react";
// import { Context } from "..";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

import { async } from "@firebase/util";
const Login = () => {
  //   const { auth } = useContext(Context);
  //   const login = async () => {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     const { user } = await auth.signInWithPopup(provider);
  //     console.log(user);
  //   };
  //   onClick = { login };
  return (
    <>
      <button>Login by Google</button>
    </>
  );
};

export default Login;
