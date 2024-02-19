import { useRef } from "react"
import { FaBars, FaTimes, FaPhone } from "react-icons/fa"
import Container from "../../share/container"
import Logo from '../../../assets/logo.svg';
import Logo1 from '../../../assets/logo1.svg';
import { Link } from "react-router-dom";

export function Navbar({banner=''}:{banner?:string}) {
    const navRef = useRef<any>()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
 
    return (
        <header className={banner ==='banner'?`absolute top-0 shadow-lg w-full z-50 flex flex-row items-center justify-between h-[90px] p-0 `: `sticky bg-white top-0 shadow-lg w-full z-50 flex flex-row items-center justify-between h-[90px] p-0`}>
            <Container>
                <div className="w-full flex flex-row items-center justify-between p-0">
                    <div>
                        <div className="w-52"><Link to={'/'}><img src={banner === 'banner' ? Logo : Logo1}/></Link></div>
                    </div>
                    <nav className="flex items-center gap-10 justify-center" ref={navRef}>
                        <div className="nav-buttons">
                            <a className="m-0 decoration-0 text-base font-medium text-[#FF0000]" href="/">HOME</a>
                            <a className={banner === "banner"?`m-0 text-white decoration-0 text-base`: "m-0 text-black decoration-0 text-base"} href="#">SOLUÇÕES</a>
                            <a className={banner === "banner"?`m-0 text-white decoration-0 text-base`: "m-0 text-black decoration-0 text-base"} href="#">BLOG</a>
                            <a className={banner === "banner"?`m-0 text-white decoration-0 text-base`: "m-0 text-black decoration-0 text-base"} href="sobre-nos">SOBRE</a>
                            <a className={banner === "banner"?`m-0 text-white decoration-0 text-base`: "m-0 text-black decoration-0 text-base"} href="contacto">CONTACTOS</a>
                        </div>
                        <button className="nav-btn nav-close-btn" onClick={showNavBar}> <FaTimes /> </button>
                    </nav>

                    <div className="support-contact h-[90px] flex flex-row gap-3 pl-4 justify-end items-center border-l border-white">
                        <FaPhone className="text-3xl text-[#FF0000]" />
                        <div className="flex flex-col">
                            <p className={banner === "banner"? `text-sm text-white`: `text-sm text-black`}>Tem Alguma Questão?</p>
                            <p className={banner === "banner"? `text-sm text-white text-[20px] font-medium`: `text-sm text-black text-[20px] font-medium`}>(+244) 931 251 965</p>
                        </div>
                    </div>

                    <button className="nav-btn" onClick={showNavBar}> <FaBars /> </button>

                </div>
            </Container>
        </header>
    )
}
