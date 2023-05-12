import { NavLink } from "react-router-dom";
import Search from "../Search";
import ButtonRandomAnime from "../Buttons/ButtonRandomAnime";
import classes from "./Header.module.scss";
import ButtonHome from "../Buttons/ButtonHome";
import ButtonFavourite from "../Buttons/ButtonFavourite";
import ButtonLogin from "../Buttons/ButtonLogin";

const Header = () => {
  return (
    <header className={classes.header_box_helper}>
      <div className={classes.header_box}>
        <div className={classes.header_panel_box}>
          <div className={classes.logo_box}>
            {" "}
            <div className={classes.logo}></div>
            <span className={classes.title_media}>MY ANIME</span>
          </div>

          <ButtonRandomAnime />
          <ButtonHome />
          {/* <ButtonFavourite /> */}
          <Search />
          <ButtonLogin />
        </div>

        <h1 className={classes.title}>MY ANIME</h1>
      </div>
    </header>
  );
};

export default Header;
