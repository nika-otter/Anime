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
          <span className={classes.title_media}>MY ANIME</span>
        </div>
        <button onClick={() => setOpen(!open)}>Click</button>
        <Search />
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
