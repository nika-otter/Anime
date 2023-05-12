import { Routes, Route } from "react-router-dom";
import AnimeInfo from "../pages/AnimeInfo";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import RandomAnime from "../pages/RandomAnime";
import SearchAnime from "../pages/SearchAnime";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search-results" element={<SearchAnime />} />
      <Route path="/anime-info" element={<AnimeInfo />} />
      <Route path="/random" element={<RandomAnime />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;
