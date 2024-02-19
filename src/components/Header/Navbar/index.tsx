import { useRef } from "react"
import { FaBars, FaTimes, FaPhone } from "react-icons/fa"
import Container from "../../share/container"
import Logo from '../../../assets/logo.png'


export function Navbar() {

    const navRef = useRef<any>()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
 
    return (
        <header className="sticky bg-white top-0 shadow-lg w-full z-50 flex flex-row items-center justify-between h-[90px] p-0 ">
            <Container>
                <div className="w-full flex flex-row items-center justify-between p-0">

                    <nav className="flex flex-row items-center gap-10 justify-center" ref={navRef}>
                        <div>
                            <img src={Logo} alt="Logomarca" className="w-[120px]" />
                        </div>
                        <div className="nav-buttons">
                            <a className="m-0 decoration-0 text-base font-medium text-[#FF0000]" href="/">HOME</a>
                            <a className="m-0 text-black decoration-0 text-base" href="#">SOLUÇÕES</a>
                            <a className="m-0 text-black decoration-0 text-base" href="#">BLOG</a>
                            <a className="m-0 text-black decoration-0 text-base" href="sobre-nos">SOBRE</a>
                            <a className="m-0 text-black decoration-0 text-base" href="contacto">CONTACTOS</a>
                        </div>
                        <button className="nav-btn nav-close-btn" onClick={showNavBar}> <FaTimes /> </button>
                    </nav>

                    <div className="support-contact h-[90px] flex flex-row gap-6 pl-4 justify-end items-center border-l border-black">
                        <FaPhone className="text-3xl text-[#FF0000]" />
                        <div className="flex flex-col">
                            <p className="text-sm text-black">Tem Alguma Questão?</p>
                            <p className="text-xl font-medium text-black">(+244) 931 251 965</p>
                        </div>
                    </div>

                    <button className="nav-btn" onClick={showNavBar}> <FaBars /> </button>

                </div>
            </Container>
        </header>
    )
}
