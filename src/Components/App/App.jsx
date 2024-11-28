import './App.css';
import Search from '../Search/Search';
import Alcohol from '../Alcohol/Alcohol';
import { useState } from 'react';
import data from '../../utils/data';

const App = () => {
  const [products, setProducts] = useState(data);
  const [searchValue, setSearchValue] = useState('');

  const searchedProducts = products.filter((product) => {
    return product.title.includes(searchValue);
  });

  return (
    <article className="app__container">
      <nav className="app__navbar">
        <Search setSearchValue={setSearchValue} searchValue={searchValue} />
      </nav>
      <main className="app__main">
        <aside className="app__sidebar">Aside</aside>
        <section className="app__content">
          <h1 className="app__title">Some Cozy Title</h1>
          <Alcohol products={searchedProducts} />
        </section>
      </main>
    </article>
  );
};

export default App;
