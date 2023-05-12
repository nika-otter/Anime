import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useActions } from "../../hooks/UseActions";
import AnimeFullInfo from "../AnimeFullInfo/AnimeFullInfo";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

const AnimeInfoComponent = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || 1;
  const { fetchAnime } = useActions();
  const { anime, loading, error } = useSelector((state) => state.anime);
  useEffect(() => {
    fetchAnime(id);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <AnimeFullInfo anime={anime}></AnimeFullInfo>
      )}
    </>
  );
};

export default AnimeInfoComponent;
