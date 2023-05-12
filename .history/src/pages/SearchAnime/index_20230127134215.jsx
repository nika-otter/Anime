import HomeComponent from "../../components/HomeComponent/HomeComponent";
import RandomAnimeComponent from "../../components/RandomAnimeComponent/RandomAnimeComponent";
import SearchAnimeComponent from "../../components/SearchAnimeComponent/SearchAnimeComponent";
import MainMasterpage from "../../layouts/MainMasterpage";

const SearchAnime = () => {
  return (
    <MainMasterpage>
      <SearchAnimeComponent />
    </MainMasterpage>
  );
};

export default SearchAnime;
