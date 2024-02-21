import { useState, useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { Navbar } from "../Header/Navbar";
import Container from "../share/container";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function Carousel({
    autoSlide = true,
    autoSlideInterval = 8000,
    slides,
    string
}: {
    autoSlide?: boolean;
    autoSlideInterval?: number;
    slides: string[];
    string: any[];
}) {
    const [curr, setCurr] = useState(0);
    const [currS, setCurrS] = useState(0);
    const tl = useRef<any>(null);
    const tl_banner = useRef<any>(null);

    const toggleTimeline = () => {
        tl.current.reversed(!tl.current.reversed());
    };
    const toggleTimelineBanner = () => {
        tl_banner.current.reversed(!tl.current.reversed());
    };


    const prev = () => {
        gsap.to(tl.current, { duration: 1, x: 100, opacity: 0.5 });
        gsap.to(tl_banner.current, { duration: 1, x: 100, opacity: 0.5 });
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
        setCurrS(curr === 0 ? slides.length - 1 : curr - 1)
        toggleTimeline();
        toggleTimelineBanner();
    }
    const next = () => {
        gsap.to(tl.current, { duration: 1, x: 100, opacity: 0.5 });
        gsap.to(tl_banner.current, { duration: 1, x: 100, opacity: 0.5 });
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
        setCurrS(curr === 0 ? slides.length - 1 : curr - 1);
        toggleTimeline();
        toggleTimelineBanner();
    }
    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        gsap.to(tl.current, { duration: 1, x: -300, opacity: 0 }); // Animar para a esquerda
        gsap.to(tl.current, { delay: 1, duration: 1, x: 0, opacity: 1 }); // Animar de volta para a posição inicial
        gsap.to(tl_banner.current, { duration: 1, y: 300, opacity: 0 }); // Animar para a esquerda
        gsap.to(tl_banner.current, { delay: 1, duration: 1, y: 0, opacity: 1 }); // Animar de volta para a posição inicial
        return () => {
            clearInterval(slideInterval);
            gsap.killTweensOf(tl);
            gsap.killTweensOf(tl_banner);
        }
    }, [currS]);



    return (
        <div className="carousel overflow-hidden relative h-[100vh]">

            <Navbar />

            <div className="absolute top-0 right-0 left-0 h-full z-30 py-4" style={{ background: 'rgba(0,0,0,0.5)' }}>
                <Container>
                    <div className="carousel-details py-[8%] w-[50%]">
                        <div className="flex items-center gap-8 text-3xl text-white">
                            <a href="https://www.youtube.com/watch?v=Z_TepAU9mJk" className="play-btn mb-3 text-1xl"></a>
                            <span className="text-[18px]">VER VÍDEO</span>
                        </div>
                        <h1 style={{ transform: `translateX(-100)` }} ref={tl} className="box text-white">
                            <span className="font-bold text-[#FF0000] text-6xl">{string[currS].title}</span> <span className="text-5xl font-light"> {string[currS].p}</span></h1>
                    </div>

                    <div className="carousel-position flex items-center justify-start z-50 gap-2">
                        {slides.map((_, i) => (
                            <div className="flex justify-center items-center border border-red-500 w-5 h-5 rounded-full">
                                <div
                                    onClick={() => prev()}
                                    className={`transition-all w-2 h-2 bg-[#ff0000] rounded-full ${curr === i ? "p-1" : "bg-opacity-50"}`}
                                ></div>
                            </div>
                        ))}
                    </div>

                </Container>
            </div>
            <div
                className="flex border transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((img) => (
                    <>
                        <img src={img} alt="" />
                    </>
                ))}
            </div>

            <div className={`carousel-controler absolute bottom-0 right-0 left-0`}>   
                <div ref={tl_banner} className="banner z-40 h-[65vh] w-full left-0 right-0">
                    <div ref={tl_banner} className={`absolute bottom-0 right-0 ${slides.length === 0 ? 'right-0' : 'right-24'} inset-0 flex items-center justify-end gap-2 top-72 px-6 z-50`}>
                        <button
                            onClick={() => prev()}
                            className="p-2 rounded-full shadow bg-[rgba(246,244,244,0.57)] text-gray-800 hover:bg-white"
                        >
                            <AiOutlineLeft size={20} color="#FF0000" />
                        </button>
                        <button
                            onClick={next}
                            className="p-2 rounded-full shadow bg-[rgba(255,251,251,0.6)] text-gray-800 hover:bg-white"
                        >
                            <AiOutlineRight size={20} color="#FF0000" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
