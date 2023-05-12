import { Link } from "react-router-dom";
import classes from "./LinkButton.module.scss";

const ButtonHome = () => {
  return (
    <Link to={"/"} className={classes.link_button}>
      <span>Home</span>
    </Link>
  );
};

export default ButtonHome;
