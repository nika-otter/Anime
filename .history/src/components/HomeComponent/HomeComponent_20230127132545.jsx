import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AnimeCardList from "../../components/AnimeCard/AnimeCardList";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination/Pagination";
import { useActions } from "../../hooks/UseActions";

const HomeComponent = () => {
  const dispatch = useDispatch();
  const { fetchTopAnime } = useActions();
  const { topAnimes, loading, error, current_page, total_pages } = useSelector(
    (state) => state.topAnime
  );
  console.log(topAnimes, loading, error, current_page, total_pages);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  console.log(page);

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
