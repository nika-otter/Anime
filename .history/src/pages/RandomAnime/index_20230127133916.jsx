import HomeComponent from "../../components/HomeComponent/HomeComponent";
import RandomAnimeComponent from "../../components/RandomAnimeComponent/RandomAnimeComponent";
import MainMasterpage from "../../layouts/MainMasterpage";

const RandomAnime = () => {
  return (
    <MainMasterpage>
      <RandomAnimeComponent />
    </MainMasterpage>
  );
};

export default RandomAnime;
