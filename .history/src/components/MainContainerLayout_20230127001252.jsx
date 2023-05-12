import classes from "./MainContainerLayout.module.scss";
const MainContainerLayout = (props) => {
  return <div className={classes.wrapper}>{props}</div>;
};

export default MainContainerLayout;
