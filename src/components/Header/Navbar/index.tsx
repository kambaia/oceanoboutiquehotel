import { useRef } from "react"
import { FaBars, FaTimes, FaPhone } from "react-icons/fa"
import Container from "../../share/container"


export function Navbar() {

    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header className="sticky top-[-2px] shadow-lg w-full z-20 flex flex-row items-center justify-between h-[90px] p-0 bg-white">
            <Container>
                <div className="w-full flex flex-row items-center justify-between p-0">

                    <nav className="flex items-center gap-10 w-[70%] justify-center" ref={navRef}>
                        <a className="m-0 decoration-0 text-base font-medium text-blue-600" href="/">HOME</a>
                        <a className="m-0 text-black decoration-0 text-base" href="#">SOLUÇÕES</a>
                        <a className="m-0 text-black decoration-0 text-base" href="#">BLOG</a>
                        <a className="m-0 text-black decoration-0 text-base" href="sobre-nos">SOBRE</a>
                        <a className="m-0 text-black decoration-0 text-base" href="contacto">CONTACTOS</a>
                        <button className="nav-btn nav-close-btn" onClick={showNavBar}> <FaTimes /> </button>
                    </nav>

                    <div className="support-contact h-[90px] flex flex-row gap-6 pl-4 justify-end items-center border-l border-black">
                        <FaPhone className="text-3xl text-blue-500" />
                        <div className="flex flex-col">
                            <p className="text-sm">Tem Alguma Questão?</p>
                            <p className="text-xl font-medium">(+244) 931 251 965</p>
                        </div>
                    </div>

                    <button className="nav-btn" onClick={showNavBar}> <FaBars /> </button>

                </div>
            </Container>
        </header>
    )
}
