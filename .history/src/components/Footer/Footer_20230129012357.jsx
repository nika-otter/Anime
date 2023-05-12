import { NavLink } from "react-router-dom";
import Search from "../Search";
import ButtonRandomAnime from "../Buttons/ButtonRandomAnime";
import classes from "./Footer.module.scss";
import ButtonHome from "../Buttons/ButtonHome";
import ButtonFavourite from "../Buttons/ButtonFavourite";

const Footer = () => {
  return (
    <footer className={classes.footer_box}>
      <div className={classes.logo_box}>
        {" "}
        <div className={classes.logo}></div>
        <span className={classes.title}>MY ANIME</span>
        {/* <span className={classes.title}>MY ANIME</span> */}
      </div>

      {/* <ButtonRandomAnime />
      <ButtonHome />
      <ButtonFavourite /> */}
      <div className={classes.github}>
        {" "}
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
      </div>
    </footer>
  );
};

export default Footer;
