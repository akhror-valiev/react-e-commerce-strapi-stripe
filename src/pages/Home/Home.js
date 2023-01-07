import React from 'react';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import FeaturedProducts from '../../components/FeaturedProducts/FeatureProducts';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

const Home = () => (
  <div className="home">
    <Slider />
    <FeaturedProducts type="featured" />
    <Categories />
    <FeaturedProducts type="trending" />
    <Contact />
  </div>
);

export default Home;
