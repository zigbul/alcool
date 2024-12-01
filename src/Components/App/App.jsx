import './App.css';
import Search from '../Search/Search';
import Alcohol from '../Alcohol/Alcohol';
import { useState, useEffect } from 'react';
import data from '../../utils/data';
import useDebounce from '../../hooks/useDebounce.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue);
  const [category, setCategory] = useState('All');

  const searchedProducts = products
    .filter((product) => {
      return product.title.toLowerCase().includes(debouncedSearchValue.toLowerCase());
    })
    .filter((product) => {
      if (category === 'All') return product;
      if (category === product.category) return product;
    });

  useEffect(() => {
    const timer = setTimeout(() => setProducts(data), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <article className="app__container">
      <nav className="app__navbar">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </nav>
      <main className="app__main">
        <Sidebar category={category} setCategory={setCategory} products={products} />
        {products.length === 0 ? (
          'Loading...'
        ) : (
          <section className="app__content">
            <h1 className="app__title">Some Cozy Title</h1>
            <Alcohol products={searchedProducts} />
          </section>
        )}
      </main>
    </article>
  );
};

export default App;
