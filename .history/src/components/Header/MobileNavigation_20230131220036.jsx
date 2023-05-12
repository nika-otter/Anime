import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonRandomAnime from "../Buttons/ButtonRandomAnime";
import LinkButton from "../Buttons/LinkButton";
import Search from "../Search/Search";
import classes from "./MobileNavigation.module.scss";
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const goHome = () => {
    navigate({ pathname: "/" });
  };
  return (
    <div className={open ? classes.wrapper_active : classes.wrapper}>
      <div className={classes.header_panel}>
        <div className={classes.logo_box}>
          <div onClick={goHome} className={classes.logo}></div>
        </div>
        <Search />
        <div className={classes.burger} onClick={() => setOpen(!open)}>
          {open ? "X" : "="}
        </div>
      </div>
      <nav className={open ? classes.nav_active : classes.nav}>
        {" "}
        {open ? (
          <>
            <ButtonRandomAnime />
            <LinkButton to="/" text="Home" />
            <LinkButton to="/login" text="Account" />
          </>
        ) : null}
      </nav>
    </div>
  );
};

export default MobileNavigation;
