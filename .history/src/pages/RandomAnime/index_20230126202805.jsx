import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AnimeFullInfo from "../../components/AnimeFullInfo/AnimeFullInfo";
import Error from "../../components/Error";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading";
import { useActions } from "../../hooks/UseActions";

const Home = () => {
  // const { fetchRandomAnime } = useActions();
  // const { randomAnimes, loading, error } = useSelector(
  //   (state) => state.randomAnime
  // );
  // useEffect(() => {
  //   fetchRandomAnime();
  // }, []);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || 1;
  const { fetchAnime } = useActions();
  const { anime, loading, error } = useSelector((state) => state.anime);
  useEffect(() => {
    fetchAnime(id);
  }, [id]);
  // console.log(anime, loading, error);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : error == null ? (
        <AnimeFullInfo anime={anime}></AnimeFullInfo>
      ) : (
        <Error error={error} />
      )}
      <Footer />
    </>
  );
};

export default Home;
