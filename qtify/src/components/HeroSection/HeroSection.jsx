import React from 'react';
import './HeroSection.css'; 
import HeroImage from '../../assests/HeroSection.png';

const HeroSection = () => {
  return (
   <div className="hero">
        <div> 
        <h2>100 Thousand Songs, ad-free</h2>
        <h2>Over thousands podcast episodes</h2>
        </div>
        <div> 
       <img src={HeroImage} alt="Headphones" width={122}/>
       </div>
    </div>
 
  );
};

export default HeroSection;
