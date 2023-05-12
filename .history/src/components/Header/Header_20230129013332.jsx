import { NavLink, useNavigate } from "react-router-dom";
import Search from "../Search";
import ButtonRandomAnime from "../Buttons/ButtonRandomAnime";
import classes from "./Header.module.scss";
import ButtonHome from "../Buttons/ButtonHome";
import ButtonFavourite from "../Buttons/ButtonFavourite";
import ButtonLogin from "../Buttons/ButtonLogin";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate({ pathname: "/" });
  };

  return (
    <header className={classes.header_box_helper}>
      <div className={classes.header_box}>
        <div className={classes.header_panel_box}>
          <div className={classes.logo_box}>
            {" "}
            <div onClick={goHome} className={classes.logo}></div>
            {/* <span className={classes.title_media}>MY ANIME</span> */}
          </div>

          <ButtonRandomAnime />
          <ButtonHome />
          <ButtonLogin />
          {/* <ButtonFavourite /> */}
          <Search />
        </div>
        <MobileNavigation />
        <h1 className={classes.title}>MY ANIME</h1>
      </div>
    </header>
  );
};

export default Header;
