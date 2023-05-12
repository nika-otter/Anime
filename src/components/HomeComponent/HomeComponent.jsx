import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AnimeCardList from "../AnimeCardList/AnimeCardList";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import { useActions } from "../../hooks/UseActions";

const HomeComponent = () => {
  const { fetchTopAnime } = useActions();
  const { topAnimes, loading, error, total_pages } = useSelector(
    (state) => state.topAnime
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;

  useEffect(() => {
    fetchTopAnime(page);
  }, [page]);

  const changePage = (p) => {
    setSearchParams({ page: p });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error == null ? (
        <>
          <AnimeCardList animes={topAnimes}></AnimeCardList>
          <Pagination
            changePage={changePage}
            current_page={Number(page)}
            total_pages={total_pages}
          />
        </>
      ) : (
        <Error error={error} />
      )}
    </>
  );
};

export default HomeComponent;
