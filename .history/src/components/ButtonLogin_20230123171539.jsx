import { useNavigate } from "react-router-dom";
import classes from "./LinkButton.module.scss";

const ButtonLogin = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate({ pathname: "/login" });
  };

  return (
    <button className={classes.link_button} onClick={login}>
      Login
      <img
        width="10px"
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
      />
    </button>
  );
};

export default ButtonLogin;
