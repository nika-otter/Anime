import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AnimeInfoComponent from "../../components/AnimeInfoComponent/AnimeInfoComponent";

const AnimeInfo = () => {
  return (
    <div className="wrapper">
      <Header />
      <AnimeInfoComponent />
      <Footer />
    </div>
  );
};

export default AnimeInfo;
