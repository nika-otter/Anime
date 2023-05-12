import { Link, useNavigate } from "react-router-dom";
import classes from "./LinkButton.module.scss";
const ButtonFavourite = () => {
  const navigate = useNavigate();

  const GoFavourite = () => {
    // navigate({ pathname: "/favourite" });
  };

  return (
    <Link className={classes.link_button} to={"/favourite"}>
      {/* <button className={classes.link_button} onClick={GoFavourite}> */}
      <span>Favourite</span>
      {/* </button> */}
    </Link>
  );
};

export default ButtonFavourite;
