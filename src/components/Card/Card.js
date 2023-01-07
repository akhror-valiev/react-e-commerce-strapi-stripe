/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

// eslint-disable-next-line react/prop-types
const Card = ({ item }) => (
  <Link className="link" to={`/product/${item.id}`}>
    <div className="card">
      <div className="image">
        {item.isNew && <span>New Season</span>}
        <img className="mainImg" src={item.img} alt="Images" />
        <img className="secondImg" src={item.img2} alt="" />
      </div>
      <h2>{item.title}</h2>
      <div className="prices">
        <h3>
          $
          {item.oldPrice}
        </h3>
        <h3>
          $
          {item.price}
        </h3>
      </div>
    </div>
  </Link>

);

export default Card;
