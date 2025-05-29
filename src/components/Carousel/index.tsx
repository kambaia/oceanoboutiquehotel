import Carousel from "./Carousel";

export default function ImageCarousel() {
  const slides = ['/b1.jpg', '/b2.jpg','/b3.jpg'];
 
  return (
    <div className="relative w-full flex justify-center">
      <div className="max-w-[1920px]">
        <Carousel slides={slides}/>
      </div>
    </div>
  );
}