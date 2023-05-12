import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Search.module.scss";
const Search = () => {
  const [inputInfo, setInputInfo] = useState("");
  const navigate = useNavigate();
  const showSearchAnime = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/search-results",
      search: `title=${inputInfo}&page=${1}`,
    });
    setInputInfo("");
  };

  return (
    <form className={classes.form} onSubmit={showSearchAnime}>
      <input
        className={classes.input}
        id="search"
        type="search"
        placeholder="Search..."
        value={inputInfo}
        onChange={(event) => {
          setInputInfo(event.target.value);
        }}
      />
      <div className={classes.submit_button} onClick={showSearchAnime}>
        <span className={classes.submit_button_span}>Go</span>
      </div>
    </form>
  );
};

export default Search;
