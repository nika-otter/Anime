import classes from "./AnimeFullInfo.module.scss";
const AnimeSynopsis = (props) => {
  return (
    <>
      <div
        className={
          props.anime.synopsis === null ? classes.none : classes.synopsis
        }
      >
        <span className={classes.span}>Synopsis</span>
        <article>{props.anime.synopsis}</article>
      </div>
    </>
  );
};

export default AnimeSynopsis;
