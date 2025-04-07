import Carousel from "./Carousel";

export default function ImageCarousel() {
  const slides = ['/b1.jpg', '/b2.jpg','/b3.jpg'];
 
  return (
    <div className="relative">
      <div className="max-full">
        <Carousel slides={slides}/>
      </div>
    </div>
  );
}