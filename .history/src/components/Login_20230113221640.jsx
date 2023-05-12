import { useContext } from "react";
import { Context } from "..";
import firebase from "firebase";
import { async } from "@firebase/util";
const Login = () => {
  const { auth } = useContext(Context);
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };
  return (
    <>
      <button onClick={login}>Login by Google</button>
    </>
  );
};

export default Login;
