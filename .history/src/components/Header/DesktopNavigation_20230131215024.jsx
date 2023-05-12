import { useNavigate } from "react-router-dom";
import ButtonRandomAnime from "../Buttons/ButtonRandomAnime";
import LinkButton from "../Buttons/LinkButton";
import Search from "../Search/Search";
import classes from "./DesKtopNavigation.module.scss";
const DesktopNavigation = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate({ pathname: "/" });
  };
  return (
    <>
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
    </>
  );
};

export default DesktopNavigation;
