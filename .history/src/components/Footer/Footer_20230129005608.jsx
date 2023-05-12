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
      <img
        className={classes.github}
        src="https://e7.pngegg.com/pngimages/551/770/png-clipart-github-pages-logo-repository-fork-github-mammal-cat-like-mammal-thumbnail.png"
      />
    </footer>
  );
};

export default Footer;
