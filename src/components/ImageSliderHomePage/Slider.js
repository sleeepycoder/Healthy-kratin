import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';
import './Slider.css'; // Import CSS file for additional styles (create this file if not present)

const Slider = () => {
  const items = [
    {
      img: 'Images/image1.jpg',
      caption: 'Caption 1sdsdsdsd',
      content: 'Content for slide 1 goes here.',
    },
    {
      img: 'Images/image2.jpg',
      caption: 'Caption 2',
      content: 'Content for slide 2 goes here.',
    },
    {
      img: 'Images/image3.jpg',
      caption: 'Caption 3',
      content: 'Content for slide 3 goes here.',
    },
    // Add more images here as needed
  ];

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Carousel
      navButtonsAlwaysVisible
      autoPlay={true} // Set to true for automatic slideshow
      animation="fade"
      indicators={false} // Set to true to display indicators at the bottom
      onChange={(index) => setActiveItemIndex(index)}
    >
      {items.map((item, index) => (
        <Item key={index} item={item} active={activeItemIndex === index} />
      ))}
    </Carousel>
  );
};

const Item = ({ item, active }) => (
  <Paper style={{ width: '100%', position: 'relative',height:'600px',marginTop:'60px' }}>
    <img src={item.img} alt={item.caption} className="slider-image" />
    <div className={`slider-content ${active ? 'active' : ''}`}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // You can adjust the background color and opacity here
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" component="h2" color="primary" gutterBottom>
          {item.caption}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {item.content}
        </Typography>
        <Button variant="contained" color="secondary" style={{ marginTop: '10px' }}>
          Learn More
        </Button>
      </div>
    </div>
  </Paper>
);

export default Slider;
