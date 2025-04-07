import { useState, useEffect, useRef } from "react";
import { Navbar } from "../Header/Navbar";
import Container from "../share/container";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import BookingSlider from "./BookingSlider";

gsap.registerPlugin(useGSAP);

export default function Carousel({
    autoSlide = true,
    autoSlideInterval = 8000,
    slides,
}: {
    autoSlide?: boolean;
    autoSlideInterval?: number;
    slides: string[];

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
                    <div className="carousel-details  flex justify-center items-center  h-screen w-[100%]">
                      <BookingSlider title={undefined} subtitle={undefined}/>
                    </div>

                    <div className="carousel-position flex flex-col items-start justify-center gap-2 absolute top-1/2 left-4 transform -translate-y-1/2 z-50">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className="flex justify-center items-center border border-[#4C96FF] w-8 h-8 rounded-full cursor-pointer"
                                onClick={() => {
                                    // Muda direto, sem animação
                                    setCurr(i);
                                    setCurrS(i);
                                }}
                            >
                                <div
                                    className={`transition-all w-2 h-2 bg-[#4C96FF] rounded-full ${curr === i ? "p-1 bg-[#4C96FF] " : "bg-opacity-50"}`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <div className="flex border transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((img) => (
                    <>
                        <img src={img} alt="" />
                    </>
                ))}
            </div>
        </div>
    );
}
