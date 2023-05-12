import AnimeMainInfo from "./AnimeMainInfo";
import AnimeSynopsis from "./AnimeSynopsis";
import AnimeVideo from "./AnimeVideo";

const AnimeFullInfo = (props) => {
  return (
    <>
      <AnimeMainInfo anime={props.anime} />
      <AnimeSynopsis anime={props.anime} />
      <AnimeVideo anime={props.anime} />
    </>
  );
};

export default AnimeFullInfo;
