import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AnimeInfoComponent from "../../components/AnimeInfoComponent/AnimeInfoComponent";
import MainMasterpage from "../../layouts/MainMasterpage";

const AnimeInfo = () => {
  return (
    // <div className="wrapper">
    //   <Header />
    //   <AnimeInfoComponent />
    //   <Footer />
    // </div>
    <MainMasterpage>
      <AnimeInfoComponent />
    </MainMasterpage>
  );
};

export default AnimeInfo;
