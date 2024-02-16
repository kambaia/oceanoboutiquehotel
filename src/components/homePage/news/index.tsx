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
                <div className="w-full flex flex-col text-center items-center justify-center pb-20 text-xl gap-2">
                    <h2 className="text-blue-600">NOTÍCIAS E DESTAQUES</h2>
                    <h1 className="text-4xl font-medium">Leia aqui as mais recentes novidades</h1>
                </div>
                <div className="flex flex-row flex-wrap gap-5 justify-center">



                    <div className="w-[350px] bg-white rounded-md mt-10">
                        <img src={image1} alt="New Year 2023" className='w-full h-[220px] rounded-t-md' />
                        <div className='flex flex-row justify-start items-center gap-4 w-full p-5'>
                            <img src={person} alt="User" className='w-10 h-10 rounded-full' />
                            <div className='flex flex-row gap-2 text-xs'>
                                <p>BY</p>
                                <p className='text-blue-600 font-medium'>MICROCONSULTING</p>
                            </div>
                        </div>
                        <p className='text-xs pl-5 text-gray-700'>21 DE DEZEMBRO, 2023</p>
                        <h2 className='font-bold text-lg px-5 pt-5 cursor-pointer hover:text-blue-600 duration-400'>Caro cliente e parceiro | Carta de 2023</h2>
                        <p className='text-gray-600 text-base px-5 pt-2'>Caro Cliente e Parceiro, No ano passado tomei a decisão de iniciar uma tradição que espero manter até ao fim da minha vida: escrever uma carta a todos os nossos clientes e parceiros, em jeito de balanço de final de ano. O objetivo desta tradição é, em primeiro lugar, agradecer o voto de confiança que […]</p>
                        <Link to={`/`} className='flex flex-row gap-2 w-full justify-start items-center p-5 font-bold text-base'>
                            <p>Ler Mais</p>
                            <FaLongArrowAltRight />
                        </Link >
                    </div>



                    <div className="w-[350px] h-[640px] bg-white rounded-md">
                        <img src={image2} alt="New Year 2023" className='w-full h-[220px] rounded-t-md' />
                        <div className='flex flex-row justify-start items-center gap-4 w-full p-5'>
                            <img src={person} alt="User" className='w-10 h-10 rounded-full' />
                            <div className='flex flex-row gap-2 text-xs'>
                                <p>BY</p>
                                <p className='text-blue-600 font-medium'>MICROCONSULTING</p>
                            </div>
                        </div>
                        <p className='text-xs pl-5 text-gray-700'>8 DE NOVEMBRO, 2023</p>
                        <h2 className='font-bold text-lg px-5 pt-5 cursor-pointer hover:text-blue-600 duration-400'>Leadership Open Day 2023</h2>
                        <p className='text-gray-600 text-base px-5 pt-2'>No dia 21 de novembro de 2023, da parte da tarde, teremos um evento presencial no Hotel Cristal no Porto direcionado para líderes do presente e do futuro. O evento conta com a participação de líderes de referência em Portugal que vão partilhar a sua experiência e conhecimento com a plateia, procurando criar um ambiente […]</p>
                        <Link to={`/`} className='flex flex-row gap-2 w-full justify-start items-center p-5 font-bold text-base'>
                            <p>Ler Mais</p>
                            <FaLongArrowAltRight />
                        </Link >
                    </div>


                    <div className="w-[350px] bg-white rounded-md mt-10">
                        <img src={image3} alt="New Year 2023" className='w-full h-[220px] rounded-t-md' />
                        <div className='flex flex-row justify-start items-center gap-4 w-full p-5'>
                            <img src={person} alt="User" className='w-10 h-10 rounded-full' />
                            <div className='flex flex-row gap-2 text-xs'>
                                <p>BY</p>
                                <p className='text-blue-600 font-medium'>MICROCONSULTING</p>
                            </div>
                        </div>
                        <p className='text-xs pl-5 text-gray-700'>21 DE DEZEMBRO, 2023</p>
                        <h2 className='font-bold text-lg px-5 pt-5 cursor-pointer hover:text-blue-600 duration-400'>Como criar um Manual de Acolhimento eficaz</h2>
                        <p className='text-gray-600 text-base px-5 pt-2'>Neste artigo, exploraremos por que é vital criar um manual de acolhimento eficaz e detalhamos passos práticos sobre como criar um manual que não apenas informa, mas também inspira e integra os novos colaboradores de maneira significativa. Num mundo empresarial em constante evolução, a integração eficaz dos novos membros da equipa é crucial para o […]</p>
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