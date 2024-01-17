import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (event) => {
    setSliderValue(Number(event.target.value));
  };

  const handleNextClick = () => {
    setSliderValue((prevValue) => (prevValue % 3) + 1);
  };

  const handlePrevClick = () => {
    setSliderValue((prevValue) => (prevValue - 2 + 3) % 3 + 1);
  };

  const getImageUrl = () => {
    // Replace these URLs with the URLs of your photos
    const photoUrls = [
      'https://iprivateer.com/wp-content/uploads/2021/11/IMG_6120-300x200.jpg',
      'https://iprivateer.com/wp-content/uploads/2021/09/IMG_3711-1-300x200.jpg',
      'https://iprivateer.com/wp-content/uploads/2021/09/IMG_4443.jpg',
      // Add more photo URLs as needed
    ];

    const index = Math.min(Math.max(sliderValue - 1, 0), photoUrls.length - 1);
    return photoUrls[index];
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the slider value every 3 seconds
      setSliderValue((prevValue) => (prevValue % 3) + 1);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div style={{ width: '700px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2>Auto-Changing Photo Slider</h2>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src={getImageUrl()}
          alt={`Photo ${sliderValue}`}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' , width:'100%'}}
        />
        <button onClick={handlePrevClick} style={arrowStyle}>
          {'<'}
        </button>
        <button onClick={handleNextClick} style={{ ...arrowStyle, right: 0 }}>
          {'>'}
        </button>
      </div>
      <label htmlFor="photoSlider">Select a Photo:</label>
      <input
        type="range"
        id="photoSlider"
        value={sliderValue}
        onChange={handleSliderChange}
        min="1"
        max="3"
        style={{ width: '100%' }}
      />
      <div>
        <p>Current Photo: {sliderValue}</p>
      </div>
    </div>
  );
};

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '24px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'white',
};

export default Slider;
