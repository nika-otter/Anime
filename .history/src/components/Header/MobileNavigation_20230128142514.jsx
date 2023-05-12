import classes from "./Loading.module.scss";
const Loading = () => {
  return (
    <>
      <div className={classes.header_panel_box_phone}>
        <div className={classes.logo_box}>
          <span className={classes.title_media}>MY ANIME</span>
        </div>

        <ButtonRandomAnime />
        <ButtonHome />
        <ButtonLogin />
        <Search />
      </div>
      <button>Click</button>
    </>
  );
};

export default Loading;
