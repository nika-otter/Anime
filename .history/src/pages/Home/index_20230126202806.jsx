import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AnimeCardList from "../../components/AnimeCard/AnimeCardList";
import Error from "../../components/Error";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination/Pagination";
import { useActions } from "../../hooks/UseActions";

const Home = () => {
  const dispatch = useDispatch();
  const { fetchTopAnime } = useActions();
  const { topAnimes, loading, error, current_page, total_pages } = useSelector(
    (state) => state.topAnime
  );
  // useEffect(() => {
  //   fetchTopAnime();
  // }, []);
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
      <Header />
      {loading ? (
        <Loading />
      ) : error == null ? (
        <>
          <AnimeCardList animes={topAnimes}></AnimeCardList>
          {/* <Pagination
            action={fetchTopAnime}
            total_pages={total_pages}
            current_page={current_page}
          /> */}
          <Pagination
            changePage={changePage}
            current_page={Number(page)}
            total_pages={total_pages}
          />
        </>
      ) : (
        <Error error={error} />
      )}
      <Footer />
    </>
  );
};

export default Home;
