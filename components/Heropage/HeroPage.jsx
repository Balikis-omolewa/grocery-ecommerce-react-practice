import Carousel from 'react-bootstrap/Carousel';
import '../Heropage/HeroPage.css';

function HeroPage() {
  return (
    <div className="carousel-container">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://247foods.ng/public/uploads/01651993700w-1920-h-800-247foods-web-banner-NEW4.jpg"
          alt="First slide"
        />
       </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://247foods.ng/public/uploads/01651993700w-1920-h-800-247foods-web-banner-NEW4.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://247foods.ng/public/uploads/01651993700w-1920-h-800-247foods-web-banner-NEW4.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default HeroPage;