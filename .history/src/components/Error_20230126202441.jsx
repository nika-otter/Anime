import classes from "./Error.module.scss";
const Error = (props) => {
  return <h1 className={classes.error}>{props.error}</h1>;
};

export default Error;
