import { useNavigate } from "react-router-dom";
import classes from "./AnimeCard.module.scss";
import "react-tooltip/dist/react-tooltip.css";
import ButtonAnimeTip from "../AnimeTip/ButtonAnimeTip";

const AnimeCard = (props) => {
  const navigate = useNavigate();

  const FullAnimeInfo = (animeId) => {
    navigate({
      pathname: "/anime-info",
      search: `id=${animeId}`,
    });
  };

  return (
    <div
      className={classes.card}
      onClick={() => FullAnimeInfo(props.anime.mal_id)}
      key={props.anime.mal_id}
    >
      <div className={classes.img_box}>
        <img
          className={classes.anime_img}
          src={props.anime.images.jpg.image_url}
          alt=""
        />
        <ButtonAnimeTip anime={props.anime} />
        <span className={classes.episodes}>{props.anime.episodes} ep</span>
        <span className={classes.score}>{props.anime.score}</span>
      </div>
      <span className={classes.title}>{props.anime.title}</span>
    </div>
  );
};

export default AnimeCard;
