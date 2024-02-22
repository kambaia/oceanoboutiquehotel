import Container from '../../share/container'
import image1 from '../../../assets/news/new-year.jpg'
import image2 from '../../../assets/news/leader.jpg'
import image3 from '../../../assets/news/microconsulting.jpg'
import person from '../../../assets/person.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function Notices() {
    return (
        <Container>
            <div className="py-20">
                <div data-aos="fade-down" data-aos-duration="600" className="w-full flex flex-col text-center items-center justify-center pb-20 text-xl gap-2">
                    <h2 className="text-red-600">NOTÍCIAS E DESTAQUES</h2>
                    <h1 className="text-4xl font-medium">Leia aqui as mais recentes novidades</h1>
                </div>
                <div className="flex flex-row flex-wrap gap-5 justify-center">

                    <div data-aos="fade-down" data-aos-delay="100" className="w-[350px] bg-white rounded-md mt-10">
                        <img src={image1} alt="New Year 2023" className='w-full h-[220px] rounded-t-md' />
                        <div className='flex flex-row justify-start items-center gap-4 w-full p-5'>
                            <img src={person} alt="User" className='w-10 h-10 rounded-full' />
                            <div className='flex flex-row gap-2 text-xs'>
                                <p>BY</p>
                                <p className='text-red-600 font-medium'>B.ALFA-INVESTIMENTOS E CONSULTORIA</p>
                            </div>
                        </div>
                        <p className='text-xs pl-5 text-gray-700'>21 DE DEZEMBRO, 2023</p>
                        <h2 className='font-bold text-lg px-5 pt-5 cursor-pointer hover:text-red-600 duration-400'>What is Lorem Ipsum?</h2>
                        <p className='text-gray-600 text-base px-5 pt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, […]</p>
                        <Link to={`/`} className='flex flex-row gap-2 w-full justify-start items-center p-5 font-bold text-base'>
                            <p>Ler Mais</p>
                            <FaLongArrowAltRight />
                        </Link >
                    </div>

                    <div data-aos="fade-down" data-aos-delay="300" className="w-[350px] h-[640px] bg-white rounded-md">
                        <img src={image2} alt="New Year 2023" className='w-full h-[220px] rounded-t-md' />
                        <div className='flex flex-row justify-start items-center gap-4 w-full p-5'>
                            <img src={person} alt="User" className='w-10 h-10 rounded-full' />
                            <div className='flex flex-row gap-2 text-xs'>
                                <p>BY</p>
                                <p className='text-red-600 font-medium'>B.ALFA-INVESTIMENTOS E CONSULTORIA</p>
                            </div>
                        </div>
                        <p className='text-xs pl-5 text-gray-700'>8 DE NOVEMBRO, 2023</p>
                        <h2 className='font-bold text-lg px-5 pt-5 cursor-pointer hover:text-red-600 duration-400'>Why do we use it?</h2>
                        <p className='text-gray-600 text-base px-5 pt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.  […]</p>
                        <Link to={`/`} className='flex flex-row gap-2 w-full justify-start items-center p-5 font-bold text-base'>
                            <p>Ler Mais</p>
                            <FaLongArrowAltRight />
                        </Link >
                    </div>

                    <div data-aos="fade-down" data-aos-delay="500" className="w-[350px] bg-white rounded-md mt-10">
                        <img src={image3} alt="New Year 2023" className='w-full h-[220px] rounded-t-md' />
                        <div className='flex flex-row justify-start items-center gap-4 w-full p-5'>
                            <img src={person} alt="User" className='w-10 h-10 rounded-full' />
                            <div className='flex flex-row gap-2 text-xs'>
                                <p>BY</p>
                                <p className='text-red-600 font-medium'>B.ALFA-INVESTIMENTOS E CONSULTORIA</p>
                            </div>
                        </div>
                        <p className='text-xs pl-5 text-gray-700'>21 DE DEZEMBRO, 2023</p>
                        <h2 className='font-bold text-lg px-5 pt-5 cursor-pointer hover:text-red-600 duration-400'>Where does it come from?</h2>
                        <p className='text-gray-600 text-base px-5 pt-2'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words […]</p>
                        <Link to={`/`} className='flex flex-row gap-2 w-full justify-start items-center p-5 font-bold text-base'>
                            <p>Ler Mais</p>
                            <FaLongArrowAltRight />
                        </Link >
                    </div>

                </div>
            </div>
        </Container>
    )
}