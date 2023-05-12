import classes from "./Loading.module.scss";
const Loading = () => {
  return (
    <div className={classes.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
