import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useActions } from "../../hooks/UseActions";
import AnimeFullInfo from "../AnimeFullInfo/AnimeFullInfo";
import Error from "../Error";
import Loading from "../Loading";
// import classes from "./Error.module.scss";
const AnimeInfoComponent = (props) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || 1;
  const { fetchAnime } = useActions();
  const { anime, loading, error } = useSelector((state) => state.anime);
  useEffect(() => {
    fetchAnime(id);
  }, []);
  console.log(anime, loading, error);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error == null ? (
        <AnimeFullInfo anime={anime}></AnimeFullInfo>
      ) : (
        // <span>{error}</span>
        <Error error={error} />
      )}
    </>
  );
};

export default AnimeInfoComponent;
