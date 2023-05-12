import classes from "./Error.module.scss";
const Error = (props) => {
  return <span className={classes.error}>{props.error}</span>;
};

export default Error;
