import classes from "./Header.module.scss";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const Header = () => {
  return (
    <header className={classes.header_box_helper}>
      <div className={classes.header_box}>
        <DesktopNavigation />
        <MobileNavigation />
        <h1 className={classes.title}>MY ANIME</h1>
      </div>
    </header>
  );
};

export default Header;
