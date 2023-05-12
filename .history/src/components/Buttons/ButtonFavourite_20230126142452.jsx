import { Link, useNavigate } from "react-router-dom";
import classes from "./LinkButton.module.scss";
const ButtonFavourite = () => {
  const navigate = useNavigate();

  const GoFavourite = () => {
    navigate({ pathname: "/favourite" });
  };

  return (
    <Link to={"/favourite"}>
      {" "}
      <button className={classes.link_button} onClick={GoFavourite}>
        Favourite
      </button>
    </Link>
  );
};

export default ButtonFavourite;
