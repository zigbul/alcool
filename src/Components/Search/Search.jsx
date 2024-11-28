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
      <button className="search__button">Search</button>
    </form>
  );
};

export default SearchBar;
