import { NavLink, useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import ButtonRandomAnime from "../Buttons/ButtonRandomAnime";
import classes from "./Header.module.scss";
import ButtonHome from "../Buttons/ButtonHome";
import ButtonLogin from "../Buttons/ButtonLogin";
import MobileNavigation from "./MobileNavigation";
import LinkButton from "../Buttons/LinkButton";

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
          </div>

          <ButtonRandomAnime />
          <LinkButton to="/" text="Home" />
          <LinkButton to="/login" text="Account" />
          <Search />
        </div>
        <MobileNavigation />
        <h1 className={classes.title}>MY ANIME</h1>
      </div>
    </header>
  );
};

export default Header;
