import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';



const MySliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(5000);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <div id='slider'>
      <h2>Price Range in Rs : {sliderValue}</h2>
      <Slider
        min={0}
        max={10000}
        step={1}
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default MySliderComponent;
