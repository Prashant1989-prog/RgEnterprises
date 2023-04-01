import React from 'react'
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";
import RG_logo from "./RG_logo.png"
import image2 from "./download.jpg"
import image3 from "./download (1).jpg"

const Home = () => {
  return (
    <div>
    <AliceCarousel autoPlay autoPlayInterval="2000" className="sliders" infinite="True" disableButtonsControls="True">
      <p><img src={RG_logo} className="sliderimg"/></p>
      <p><img src={image2} className="sliderimg"/></p>
      <p><img src={image3} className="sliderimg"/></p>

    </AliceCarousel>
    
    
    </div>
  )
}

export default Home