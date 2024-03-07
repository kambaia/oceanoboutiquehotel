import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { services } from "../../../../utils/services";

export function WeDoCards() {
    return (
        <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        autoplay={{
          delay: 3000, // tempo de atraso em milissegundos entre os slides
          disableOnInteraction: false, // se true, autoplay para quando interagir com o carrossel (clique, toque)
        }}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {services.map((service) => (

            <SwiperSlide key={service.title}>
                
               
      
            <div className="we-do-card grid items-center justify-center rounded-md" data-aos="fade-down">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 rounded-md">
                    <div className="rounded-md w-[300px] left-0 right-0 bg-blue-500 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-[400px] w-[300px] rounded-md">
                            <img className="h-full rounded-md w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={service.image} alt="Imagem" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-xl font-bold text-white">{service.title}</h1>
                            <p className="my-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{service.description}</p>
                            <Link to={`/service/${service.url}`} className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Saber Mais</Link>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
        ))}
    </Swiper>
    )
}