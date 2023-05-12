import classes from "./AnimeSynopsis.module.scss";
const AnimeSynopsis = (props) => {
  return (
    <>
      <div className={props.anime.synopsis ? classes.synopsis : classes.none}>
        <span className={classes.span}>Synopsis</span>
        <article>{props.anime.synopsis}</article>
      </div>
    </>
  );
};

export default AnimeSynopsis;
