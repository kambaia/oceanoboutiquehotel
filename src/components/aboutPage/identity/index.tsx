import Container from '../../share/container';

import Image from '../../../assets/identity.jpg'
import Sign from '../../../assets/sign.png'

import { SiVerizon } from "react-icons/si";

export function Identity() {
    return (
        <Container>
            <div className="flex flex-row items-center justify-around ">

                <div className="flex flex-col py-32 ">

                    <div className="flex flex-row gap-5 h-[500px]">
                        <div className="w-[20px] h-[250px] bg-blue-600 rounded-md"></div>
                        <div className='w-[500px] '>
                            <img src={Image} alt="Identity" className='w-full rounded-md' />
                        </div>
                    </div>

                    <div className='bg-white p-10 w-[300px] rounded-md flex flex-row items-end gap-1 mt-[-120px]'>
                        <p className='text-blue-600 text-5xl font-bold'>Macro</p>
                        <p className='font-bold text-lg text-gray-500'>identidade.</p>
                    </div>

                </div>

                <div className=' flex flex-col gap-5 w-[520px] text-gray-800 text-base text-justify'>
                    <h1 className='font-bold text-4xl' >A nossa identidade.</h1>
                    <p className='font-bold' >Rigor. Comprometimento. Confiança. Foco. Competência.</p>
                    <p>Enquanto empresa estamos <b>focados em capacitar líderes e organizações para atingirem o seu máximo potencial.</b></p>
                    <p>Não acreditamos em talento ou competências inatas. Sabemos que toda e qualquer pessoa pode fazer mais e melhor. E é por esse pensamento que nos guiamos diariamente, tanto na evolução que trazemos aos nossos clientes como para nós mesmos.</p>
                    <p><b> Ajudamos as organizações a gerirem os seus recursos com as melhores práticas de gestão e liderança, com vista a melhorar a sua performance, inspirar os seus colaboradores e clientes e a construir um legado.</b> E este legado vai sendo construído com uma Cultura Organizacional e Modelo de Liderança adequados à realidade das organizações e com tudo o que a seguir advém a nível estratégico, financeiro e operacional.</p>
                    <p>Esta fórmula de sucesso tem contribuído para formar a <b> nossa identidade</b>, desde o primeiro dia.</p>
                    <div className='flex flex-row items-center gap-2 font-bold italic'>
                        <SiVerizon />
                        <p>Empowering leaders and organizations.</p>
                    </div>
                    <div className='flex flex-row gap-4 items-center mt-5'>
                        <img src={Sign} alt="Assinatura" className='w-[120px] border-r-2 border-gray-400 pr-5' />
                        <div className='flex flex-col gap-1'>
                            <p className='font-bold text-lg'>Sergio Salino</p>
                            <p className='text-gray-600 text-base'>CEO | Macro Consulting</p>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}