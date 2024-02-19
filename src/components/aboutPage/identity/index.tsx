import Container from '../../share/container';

import Image from '../../../assets/identity.jpg'
export function Identity() {
    return (
        <Container>
            <div className="flex flex-row items-center justify-around ">

                <div className="flex flex-col py-32 ">

                    <div className="flex flex-row gap-5 h-[500px]">
                        <div className="w-[20px] h-[250px] bg-red-600 rounded-md"></div>
                        <div className='w-[500px] '>
                            <img src={Image} alt="Identity" className='w-full rounded-md' />
                        </div>
                    </div>

                    <div className='bg-white p-10 w-[300px] rounded-md flex flex-row items-end gap-1 mt-[-120px]'>
                        <p className='text-red-600 text-5xl font-bold'>Macro</p>
                        <p className='font-bold text-lg text-gray-500'>identidade.</p>
                    </div>

                </div>

                <div className=' flex flex-col gap-5 w-[520px] text-gray-800 text-base text-justify'>
                    <h1 className='font-bold text-4xl' >A nossa identidade.</h1>
                    <p>Existem diversos modelos e técnicas passíveis de serem utilizadas para o apuramento do valor da empresa ou negócio, desde as mais simples às mais complexas. Todos esses modelos e técnicas são válidos, devendo o avaliador encontrar os melhores modelos e técnicas adaptados ao modelo de negócios e respetivas características da empresa.</p>
                    <p>É fundamental conhecer o valor real da sua empresa ou negócio para as decisões estratégicas. A este nível, com o crescente aumento de M&A (Fusões e Aquisições), são várias as oportunidades para empresas e negócios poderem expandir por esta via ou através de investidores externos.</p>
                    <p>Um mito comum entre muitas empresas é que só devem conhecer a avaliação da sua empresa quando procuram vendê-la. E é aqui que as empresas acabam por obter menos do que aquilo que desejam em termos de resultados.</p>
                    <p className='font-bold' >Rigor. Comprometimento. Confiança. Foco. Competência.</p>
                    <p>Enquanto empresa estamos <b>focados em capacitar líderes e organizações para atingirem o seu máximo potencial.</b></p>
                    {/*
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
                    </div> */}
                </div>

            </div>
        </Container>
    )
}