import './Search.css';

const SearchBar = ({ searchValue, setSearchValue }) => {
  const valueHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className="search">
      <input
        onChange={valueHandler}
        value={searchValue}
        className="search__input"
        placeholder="Search booze"
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
