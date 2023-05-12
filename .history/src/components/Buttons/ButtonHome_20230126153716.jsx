import { Link, useNavigate } from "react-router-dom";
import classes from "./LinkButton.module.scss";

const ButtonHome = () => {
  const navigate = useNavigate();

  // const GoHome = () => {
  //   navigate({ pathname: "/" });
  // };

  return (
    <Link to={"/"} className={classes.link_button}>
      <span>Home</span>
    </Link>
  );
};

export default ButtonHome;
