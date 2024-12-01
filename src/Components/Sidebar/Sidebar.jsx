import Category from './Category/Category';

const Sidebar = ({ category, setCategory, products }) => {
  const categories = ['All', ...new Set(products.map((product) => product.category))];

  return (
    <aside className="app__sidebar sidebar">
      <Category value={category} setCategory={setCategory} categories={categories} />
    </aside>
  );
};

export default Sidebar;
