import classes from "./AnimeVideo.module.scss";
const AnimeVideo = (props) => {
  return (
    <>
      <div
        className={
          props.anime.trailer?.embed_url ? classes.video : classes.none
        }
      >
        <embed
          className={
            props.anime.trailer?.embed_url ? classes.embed : classes.none
          }
          src={props.anime.trailer?.embed_url}
        ></embed>
      </div>
    </>
  );
};

export default AnimeVideo;
