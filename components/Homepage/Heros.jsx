import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Heros.css'; 

const Hero = () => {
  return (
    <div className="carousel-container">
        <div id="hero" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#hero" data-slide-to="0" className="active"></li>
        <li data-target="#hero" data-slide-to="1"></li>
        <li data-target="#hero" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://247foods.ng/public/uploads/01651993700w-1920-h-800-247foods-web-banner-NEW4.jpg" className="d-block w-100" alt="..." />
          
        </div>
        <div className="carousel-item">
          <img src="https://247foods.ng/public/uploads/01651993700w-1920-h-800-247foods-web-banner-NEW4.jpg" className="d-block w-100" alt="..." />
         
        </div>
        <div className="carousel-item">
          <img src="https://247foods.ng/public/uploads/01651993700w-1920-h-800-247foods-web-banner-NEW4.jpg" className="d-block w-100" alt="..." />
          
        </div>
      </div>
     </div>
    </div>
  );
};

export default Hero;
