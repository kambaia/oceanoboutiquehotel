import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Image1 from "./wall1.jpg"
import Image2 from "./wall5.jpg"
import Image3 from "./wall3.jpg"
import Image4 from "./wall4.jpg"

export default function Carrossel() {

    const data = [
        { id: 1, image: Image1 },
        { id: 2, image: Image2 },
        { id: 3, image: Image3 },
        { id: 4, image: Image4 },
    ]

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
        >
            {data.map((item) => (
                <SwiperSlide key={item.id} className='flex items-center w-full max-h-[680px] bg-gray-500 object-cover'>
                    <img className='object-cover w-full' src={item.image} alt="alterado" />
                </SwiperSlide>
            ))}

        </Swiper>

    );

}