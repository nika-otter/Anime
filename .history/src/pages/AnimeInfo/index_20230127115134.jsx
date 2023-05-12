import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import AnimeFullInfo from "../../components/AnimeFullInfo/AnimeFullInfo";
// import Header from "../../components/Header/Header";
import { useActions } from "../../hooks/UseActions";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AnimeInfoComponent from "../../components/AnimeInfoComponent/AnimeInfoComponent";
// import Loading from "../../components/Loading";
// import Error from "../../components/Error";
const AnimeInfo = () => {
  // const [searchParams] = useSearchParams();
  // const id = searchParams.get("id") || 1;
  // const { fetchAnime } = useActions();
  // const { anime, loading, error } = useSelector((state) => state.anime);
  // useEffect(() => {
  //   fetchAnime(id);
  // }, []);
  // console.log(anime, loading, error);

  return (
    <>
      <Header />
      <AnimeInfoComponent />
      <Footer />
    </>
  );
};

export default AnimeInfo;
