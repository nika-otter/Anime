import { useEffect } from "react";
import { useSelector } from "react-redux";
import AnimeCardList from "../AnimeCardList/AnimeCardList";
import Pagination from "../../components/Pagination/Pagination";
import { useActions } from "../../hooks/UseActions";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Error from "../Error/Error";
import NoAnime from "../NoSearchResult/NoAnime";
const SearchAnimeComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title") || "naruto";
  const page = searchParams.get("page") || 1;
  const { fetchSearchAnime } = useActions();
  const { searchAnimes, loading, error, total_pages } = useSelector(
    (state) => state.searchAnime
  );
  useEffect(() => {
    console.log(title, page);
    fetchSearchAnime(title, page);
  }, [title, page]);

  const changePage = (p) => {
    setSearchParams({ title: title, page: p });
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : error == null ? (
        searchAnimes.length === 0 ? (
          <NoAnime />
        ) : (
          <>
            <AnimeCardList animes={searchAnimes}></AnimeCardList>
            <Pagination
              changePage={changePage}
              current_page={Number(page)}
              total_pages={total_pages}
            />
          </>
        )
      ) : (
        <Error error={error} />
      )}
    </>
  );
};

export default SearchAnimeComponent;
