import { Link } from "react-router-dom";
import classes from "./LinkButton.module.scss";

const ButtonLogin = () => {
  return (
    <>
      <Link to={"/login"} className={classes.link_button}>
        <span>Account</span>
      </Link>
    </>
  );
};

export default ButtonLogin;
