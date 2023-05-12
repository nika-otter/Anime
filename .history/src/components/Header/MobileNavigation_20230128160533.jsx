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
      <div className={classes.header_panel_box_phone}>
        <div className={classes.logo_box}>
          <span className={classes.title_media}>MY ANIME</span>
        </div>
        {open ? (
          <>
            <ButtonRandomAnime />
            <ButtonHome />
            <ButtonLogin />
          </>
        ) : (
          <></>
        )}

        <Search />
      </div>
      <button onClick={() => setOpen(!open)}>Click</button>
    </>
  );
};

export default MobileNavigation;
