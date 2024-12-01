const Category = ({ value, setCategory, categories }) => {
  return (
    <div className="sidebar__category category">
      <label htmlFor="category__select" className="category__label">
        Category
      </label>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={value}
        name="category"
        id="category__select">
        {categories.map((category) => (
          <option key={Math.random()} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
