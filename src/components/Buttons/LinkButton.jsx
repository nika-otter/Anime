import { Link } from "react-router-dom";
import classes from "./LinkButton.module.scss";

const LinkButton = (props) => {
  return (
    <Link to={props.to} className={classes.link_button}>
      <span>{props.text}</span>
    </Link>
  );
};

export default LinkButton;
