/* eslint-disable max-len */
import React from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';

// eslint-disable-next-line react/prop-types
const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Lomg Sleeve Tshirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Shorts',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',

      title: 'Shorts',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',

      title: 'Shorts',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>
          {type}
          {' '}
          products
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates dolorum similique assumenda eum expedita, molestiae odio doloremque amet illum aliquam, animi mollitia in blanditiis tenetur corrupti quasi obcaecati possimus.</p>
      </div>
      <div className="bottom">
        {data.map((item) => <Card item={item} key={item.id} />)}

      </div>
    </div>
  );
};

export default FeaturedProducts;
