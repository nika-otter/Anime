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
      <img src="https://logos-marques.com/wp-content/uploads/2021/03/GitHub-Logo.png" />
    </footer>
  );
};

export default Footer;
