import { useEffect, useRef, useState } from "react"
import { FaBars, FaTimes, FaPhone } from "react-icons/fa"
import Container from "../../share/container"
import Logo from '../../../assets/logo.svg';
import Logo1 from '../../../assets/logo1.svg';
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
    console.log(location.pathname)


    return (
        <header className={`top-0 w-full z-50 flex flex-row items-center justify-between h-[90px] p-0  ${sticky?'fixed top-0 bg-white shadow-lg': `absolute ` }`}>
            <Container>
                <div className="w-full flex flex-row items-center justify-between p-0">
                    <div>
                        <div className="w-52"><Link to={'/'}><img src={sticky ? Logo1 : Logo} /></Link></div>
                    </div>
                    <nav className="flex items-center gap-10 justify-center" ref={navRef}>
                        <div className="nav-buttons">
                            <Link className={sticky ? `m-0 decoration-0 text-base ${location.pathname === '/' ? 'text-[#FF0000]': 'text-black'}` : `m-0 text-white decoration-0 text-base ${location.pathname === '/' ? 'text-[#FF0000]': ' text-white'}` } to="/">HOME</Link>
                            <Link className={sticky ? `m-0 decoration-0 text-base ${location.pathname === '/' ? 'text-[#FF0000]': 'text-black'}` : `m-0 text-white decoration-0 text-base ${location.pathname === '/' ? 'text-[#FF0000]': ' text-white'}` } to="/">HOME</Link>
                            <Link className={sticky ? `m-0 decoration-0 text-base ${location.pathname === '/solucao' ? 'text-[#FF0000]': 'text-black'}` : `m-0 text-white decoration-0 text-base ${location.pathname === '/solucao' ? 'text-[#FF0000]': 'text-white'}` } to="#">SOLUÇÕES</Link>
                            <Link className={sticky ? `m-0 decoration-0 text-base ${location.pathname === '/blog' ? 'text-[#FF0000]': 'text-black'}` : `m-0 text-white decoration-0 text-base ${location.pathname === '/blog' ? 'text-[#FF0000]': 'text-white'}`} to="#">BLOG</Link>
                            <Link className={sticky ? `m-0 decoration-0 text-base ${location.pathname === '/sobre-nos' ? 'text-[#FF0000]': 'text-black'}` : `m-0 text-white decoration-0 text-base ${location.pathname === '/sobre-nos' ? 'text-[#FF0000]': 'text-white'}`} to="/sobre-nos">SOBRE</Link>
                            <Link className={sticky ? `m-0 decoration-0 text-base ${location.pathname === '/contacto' ? 'text-[#FF0000]': 'text-black'}` : `m-0 text-white decoration-0 text-base ${location.pathname === '/' ? 'text-[#FF0000]': 'text-white'}`} to="/contacto">CONTACTOS</Link>
                        </div>
                        <button className="nav-btn nav-close-btn" onClick={showNavBar}> <FaTimes /> </button>
                    </nav>

                    <div className={`support-contact h-[90px] flex flex-row gap-3 pl-4 justify-end items-center ${sticky?'border-l border-black ': ` ` }`}>
                        <FaPhone className="text-3xl text-[#FF0000]" />
                        <div className="flex flex-col">
                            <p className={sticky ? `text-sm text-black` : `text-sm text-white`}>Tem Alguma Questão?</p>
                            <p className={sticky ? `text-sm text-black text-[20px] font-medium` : `text-sm text-white text-[20px] font-medium`}>(+244) 931 251 965</p>
                        </div>
                    </div>

                    <button className="nav-btn" onClick={showNavBar}> <FaBars /> </button>

                </div>
            </Container>
        </header>
    )
}
