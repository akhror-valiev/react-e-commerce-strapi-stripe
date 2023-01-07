/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useState } from 'react';
import './Slider.scss';

const Slider = () => {
  const [curreSlide, setCurrentSlide] = useState(0);

  const prevSlideHandler = () => {
    setCurrentSlide(curreSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlideHandler = () => {
    setCurrentSlide(curreSlide === 2 ? 0 : (prev) => prev + 1);
  };

  const data = [
    'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];

  return (
    <div className="slider">
      <div className="container" style={{ transform: `translateX(-${curreSlide * 100}vw)` }}>
        <img src={data[0]} alt="Slider photo" />
        <img src={data[1]} alt="Slider photo" />
        <img src={data[2]} alt="Slider photo" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlideHandler}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlideHandler}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
