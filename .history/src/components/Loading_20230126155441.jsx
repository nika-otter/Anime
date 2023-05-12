import classes from "./Loading.module.scss";
const Loading = () => {
  return (
    <div className={classes.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
