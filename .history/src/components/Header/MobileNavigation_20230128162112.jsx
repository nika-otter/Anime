import { useState } from "react";
import ButtonHome from "../Buttons/ButtonHome";
import ButtonLogin from "../Buttons/ButtonLogin";
import ButtonRandomAnime from "../Buttons/ButtonRandomAnime";
import Search from "../Search";
import classes from "./MobileNavigation.module.scss";
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={classes.header_panel_box}>
        <div className={classes.logo_box}>
          <div className={classes.logo}></div>
          <span className={classes.title}>MY ANIME</span>
        </div>
        <Search />
        <button onClick={() => setOpen(!open)}>Click</button>

        {open ? (
          <>
            <ButtonRandomAnime />
            <ButtonHome />
            <ButtonLogin />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default MobileNavigation;
