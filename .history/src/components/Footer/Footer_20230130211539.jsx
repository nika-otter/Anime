import { useNavigate } from "react-router-dom";
import classes from "./Footer.module.scss";

const Footer = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate({ pathname: "/" });
  };

  return (
    <footer className={classes.footer_box}>
      <div className={classes.logo_box}>
        {" "}
        <div onClick={goHome} className={classes.logo}></div>
        <span className={classes.title}>MY ANIME</span>
      </div>
      <a href="https://github.com/tiastaa" className={classes.github}>
        {" "}
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
      </a>
    </footer>
  );
};

export default Footer;
