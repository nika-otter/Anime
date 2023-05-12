import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/UseActions";
import classes from "./LinkButton.module.scss";
const ButtonRandomAnime = () => {
  const navigate = useNavigate();

  const { fetchRandomAnime } = useActions();
  const { randomAnimes } = useSelector((state) => state.randomAnime);
  const ShowRandomAnime = () => {
    fetchRandomAnime();
    navigate({ pathname: "/random", search: `id=${randomAnimes.mal_id}` });
  };

  useEffect(() => {
    fetchRandomAnime();
  }, []);

  return (
    <div className={classes.link_button} onClick={ShowRandomAnime}>
      <span>Random Anime</span>
    </div>
  );
};

export default ButtonRandomAnime;
