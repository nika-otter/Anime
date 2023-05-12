import { useState } from "react";
import ButtonHome from "../Buttons/ButtonHome";
import ButtonLogin from "../Buttons/ButtonLogin";
import ButtonRandomAnime from "../Buttons/ButtonRandomAnime";
import Search from "../Search";
import classes from "./MobileNavigation.module.scss";
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={
        open ? classes.header_panel_box_active : classes.header_panel_box
      }
    >
      <div className={classes.header_panel}>
        <div className={classes.logo_box}>
          <div className={classes.logo}></div>
          {/* <span className={classes.title}>MY ANIME</span> */}
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
            <ButtonHome />
            <ButtonLogin />
          </>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default MobileNavigation;
