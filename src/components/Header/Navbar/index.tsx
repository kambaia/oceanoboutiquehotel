import { useEffect, useRef, useState } from "react"
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa"
import Container from "../../share/container"
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
    const navRef = useRef<any>()
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    const location = useLocation();

    // Sticky Navbar
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 180) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
    });
    return (
        <header className={`top-0 w-full z-50 flex flex-row items-center justify-between h-[90px] p-0  ${sticky ? 'fixed top-[-2px] bg-white shadow-lg' : `absolute `}`}>
            <Container>
                <div className="w-full flex flex-row items-center justify-between p-0">
                    <div>
                        <div className="w-44 "><Link to={'/'}><img src={sticky ? '/logo/logo.png' : '/logo/logo.png'} /></Link></div>
                    </div>
                    <nav className="flex items-center gap-10 justify-center" ref={navRef}>
                        <div className="nav-buttons">
                            <Link className={sticky ? `m-0 decoration-0 text-base ${location.pathname === '/' ? 'text-[#4C96FF]': 'text-black'}` : `m-0 text-white decoration-0 text-base ${location.pathname === '/' ? 'text-[#4C96FF]': ' text-white'}` } to="/">HOME</Link>
                            <Link className={sticky ? `m-0 decoration-0 text-base ${location.pathname === '/sobre-nos' ? 'text-[#4C96FF]': 'text-black'}` : `m-0 text-white decoration-0 text-base ${location.pathname === '/sobre-nos' ? 'text-[#4C96FF]': 'text-white'}`} to="/sobre-nos">NOSSOS QUARTOS</Link>
                            <Link className={sticky ? `m-0 decoration-0 text-base ${location.pathname === '/galeria' ? 'text-[#4C96FF]': 'text-black'}` : `m-0 text-white decoration-0 text-base ${location.pathname === '/galeria' ? 'text-[#4C96FF]': 'text-white'}`} to="/galeria">GALERIA</Link>
                            <Link className={sticky ? `m-0 decoration-0 text-base ${location.pathname === '/contacto' ? 'text-[#4C96FF]': 'text-black'}` : `m-0 text-white decoration-0 text-base ${location.pathname === '/contacto' ? 'text-[#4C96FF]': 'text-white'}`} to="/contacto">CONTACTOS</Link>
                        </div>
                        <button className={sticky ? `nav-btn nav-close-btn text-black`: `nav-btn nav-close-btn text-white`} onClick={showNavBar}> <FaTimes /> </button>
                    </nav>
                    <div className={`support-contact h-[90px] flex flex-row gap-3 pl-4 justify-end items-center ${sticky?'border-l border-black ': ` ` }`}>
                      <Link to={'https://wa.me/244997533711'} target="_blank" >  <FaWhatsapp className="text-3xl text-[#4C96FF]" /></Link>
                        <div className="flex flex-col">
                            <p className={sticky ? `text-sm text-black` : `text-sm text-white`}>Tem Alguma Questão?</p>
                            <p className={sticky ? `text-sm text-black text-[20px] font-medium` : `text-sm text-white text-[20px] font-medium`}><Link to={'https://wa.me/244997533711'}>(+244) 935999463</Link></p>
                        </div>
                    </div>
                    <button className="nav-btn" onClick={showNavBar}> <FaBars /> </button>
                </div>
            </Container>
        </header>
    )
}
