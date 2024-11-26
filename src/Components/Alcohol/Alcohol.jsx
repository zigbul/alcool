import './Alcohol.css';
import data from '../../utils/data.js';

const AlcoCard = ({ alco }) => {
  const { title, img, company, category, exposure, reviews, prevPrice, newPrice } = alco;

  return (
    <li className="alcohol__item">
      <img className="alcohol__image" src={img} />
      <div className="alcohol__content">
        <h3 className="alcohol__title">{title}</h3>
        <p className="alcohol__company">Company: {company}</p>
        <p className="alcohol__category">
          Category: {category} • {exposure} years
        </p>
        <p className="alcohol__reviews">Reviews: {reviews}</p>
        <div className="alcohol__pricing">
          <span className="alcohol__price alcohol__price_prev">Old price: ${prevPrice}</span>
          <span className="alcohol__price alcohol__price_new">New price: ${newPrice}</span>
        </div>
      </div>
    </li>
  );
};

const Alcohol = () => {
  return (
    <ul className="alcohol">
      {data.map((alco) => {
        return <AlcoCard alco={alco} key={Math.random()} />;
      })}
    </ul>
  );
};

export default Alcohol;
