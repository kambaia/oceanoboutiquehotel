import Container from "../../share/container";
import foto from '../../../assets/Agro/Populacao2.jpg';
import { FaArrowRight } from "react-icons/fa6";

export function AgroWhy() {
    return (
        <Container>
            <div className="flex flex-col gap-2 py-20">
                <div className="w-full flex mt-4 gap-5 flex-row flex-wrap justify-between">
                    <div> 
                        <img src={foto} alt="Imagem" className="w-[550px] h-[500px] object-center object-cover rounded-sm" />
                    </div>
                    <div className="w-[600px] text-justify">
                        <h2 className="text-xl text-red-600 font-medium uppercase">População Mundial</h2>
                        <h2 className="text-4xl text-black font-medium pb-4">Porque o futuro da humanidade pode depender da África?</h2>
                        <p className="text-base">Em termos demográficos, a população mundial é o total de humanos atualmente vivendo no planeta Terra. Estima-se que a população mundial chegou aos 8 bilhões em 15 de novembro de 2022. As Nações Unidas estimam que a população humana chegue até 11,2 bilhões em 2100.</p>
                        <div className="mt-5 gap-3 flex flex-col">
                            <div className="flex flex-row gap-2 items-center">
                                <div className="p-2 bg-[#F7A400] rounded-full"><FaArrowRight className="tex-base text-white" /></div>
                                <p className="text-[15px] font-medium">Até 2100, uma em cada três pessoas no planeta terá nascido na África subsaariana.</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <div className="p-2 bg-[#F7A400] rounded-full"><FaArrowRight className="tex-base text-white" /></div>
                                <p className="text-[15px] font-medium">A Nigéria ultrapassará a China em população, tornando-se o segundo maior país depois da Índia.</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <div className="p-2 bg-[#F7A400] rounded-full"><FaArrowRight className="tex-base text-white" /></div>
                                <p className="text-[15px] font-medium">A população africana vai dobrar até 2050, chegando a 2,5 bilhões de pessoas. Destacando que 50% desses habitantes terá menos de 25 anos.</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <div className="p-2 bg-[#F7A400] rounded-full"><FaArrowRight className="tex-base text-white" /></div>
                                <p className="text-[15px] font-medium">A população africana chegará a 4,3 bilhões em 2100, o equivalente a quase 40% da população mundial.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}