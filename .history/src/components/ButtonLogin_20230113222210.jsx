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
    </button>
  );
};

export default ButtonLogin;
