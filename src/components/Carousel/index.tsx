import Carousel from "./Carousel";
import Image1 from "./wall1.jpg"
import Image2 from "./wall2.jpg"
import Image3 from "./wall3.jpg"
import Image4 from "./wall4.jpg"

export default function ImageCarousel() {
  const slides = [Image1, Image2, Image3, Image4];
  const string = [
    {title: 'Os melhores parceiros na gestão da sua empresa', p:'Consultoria e Controlo de Gestão'}, 
    {title: 'Foco na maximização de valor para o detentor de capital', p:'Corporate Finance'},
    {title: 'A guiar líderes e organizações para o sucesso', p:'Cultura e Liderança'},
    {title: 'Apoio personalizado na obtenção de financiamento', p:'Incentivos Financeiros e Fiscais'}];

  return (
    <div className="relative">
      <div className="max-full  ">
        <Carousel slides={slides} string={string}/>
      </div>
    </div>
  );
}