import classes from "./AnimeFullInfo.module.scss";
const AnimeVideo = (props) => {
  return (
    <>
      <div
        className={
          props.anime?.trailer?.embed_url ? classes.none : classes.video
        }
      >
        <embed
          className={
            props.anime?.trailer?.embed_url ? classes.none : classes.embed
          }
          src={props.anime?.trailer?.embed_url}
        ></embed>
      </div>
    </>
  );
};

export default AnimeVideo;
