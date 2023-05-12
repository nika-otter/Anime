import AnimeMainInfo from "./AnimeMainInfo";
import AnimeSynopsis from "./AnimeSynopsis";
import AnimeVideo from "./AnimeVideo";

const AnimeFullInfo = (props) => {
  return (
    <>
      <AnimeMainInfo />
      <AnimeSynopsis />
      <AnimeVideo />
    </>
  );
};

export default AnimeFullInfo;
