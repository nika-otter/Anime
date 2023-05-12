import { Link, useNavigate } from "react-router-dom";
import classes from "./LinkButton.module.scss";

const ButtonLogin = () => {
  const navigate = useNavigate();
  // const acc = async () => {
  //   navigate({ pathname: "/login" });
  // };

  return (
    <>
      <Link to={"/login"} className={classes.link_button}>
        <span>Account</span>
      </Link>
    </>
  );
};

export default ButtonLogin;
