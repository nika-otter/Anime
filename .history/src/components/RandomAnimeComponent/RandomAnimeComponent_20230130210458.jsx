import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AnimeFullInfo from "../../components/AnimeFullInfo/AnimeFullInfo";
import Error from "../Error/Error";
import Loading from "../../components/Loading/Loading";
import { useActions } from "../../hooks/UseActions";

const RandomAnimeComponent = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || 1;
  const { fetchAnime } = useActions();
  const { anime, loading, error } = useSelector((state) => state.anime);
  useEffect(() => {
    fetchAnime(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error == null ? (
        <AnimeFullInfo anime={anime}></AnimeFullInfo>
      ) : (
        <Error error={error} />
      )}
    </>
  );
};

export default RandomAnimeComponent;
