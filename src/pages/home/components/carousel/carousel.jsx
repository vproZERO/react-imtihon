import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  width:"1350px",
  height: '500px'
}
const slideImages = [
  {
    url: 'https://www.ecrspune.com/upload/Banner-5.jpg'
  },
  {
    url: 'https://www.topclassrentals.com//assets/images/slider/slider-01.jpg'
    
  },
  {
    url: 'https://www.algarvecarbooking.com/img/slider_1_2.jpg'
    
  },
];
 
export const StaticCarousel = () => {
    return (
      <div className="container slide__container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

