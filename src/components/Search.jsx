import { useNavigate } from "react-router-dom";
import { useState } from "react";
import searchIcon from "../searchIcon.svg";

const Search = ({ clickHandler }) => {
  // State for search Form
  const [search, setSearch] = useState("");
  // for navigating to search page after the search button is clicked.
  const navigate = useNavigate();
  // Change handler for input element
  function changeHandler(e) {
    setSearch(e.target.value);
  }
  return (
    // Form for searching
    <form className="search-form">
      <input
        type="serach"
        name="search"
        placeholder="Search"
        onChange={changeHandler}
        required
        value={search}
      />
      <button
        type="submit"
        className="search-button"
        onClick={(e) => {
          clickHandler(e, search);
          navigate("/search");
        }}
      >
        <img src={searchIcon} alt="Search" />
      </button>
    </form>
  );
};

export default Search;
