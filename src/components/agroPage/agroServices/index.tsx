import Container from "../../share/container"
import {  FaShieldAlt } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { MdAssessment, MdManageAccounts } from "react-icons/md";

export function AgroServices() {
    return (
        <Container>
            <div className="py-20">
                <h2 className="text-xl text-red-600 font-medium uppercase">As Nossas Soluções</h2>
                <h2 className="text-4xl text-black font-medium pb-4">Garantindo o seu sucesso e alta produtividade agrícola</h2>
                <div className="w-full flex flex-col gap-3 pb-20">
                    <p>Nossa equipe de consultores reúne uma combinação única de conhecimento técnico, experiência de mercado e visão estratégica para orientar nossos clientes em todas as fases do ciclo de investimento agropecuário. Desde a avaliação de oportunidades de negócios até a implementação de estratégias de crescimento, estamos comprometidos em alcançar resultados sólidos e sustentáveis.</p>
                    <p>Além disso, priorizamos investimentos que promovam práticas agrícolas e pecuárias responsáveis, respeitando o meio ambiente, protegendo os recursos naturais e garantindo o bem-estar animal. Acreditamos firmemente que o sucesso financeiro pode e deve andar de mãos dadas com a responsabilidade social e ambiental.</p>
                    <p>Ao escolher nossa empresa de consultoria e investimento na área de agropecuária, você não está apenas buscando retornos financeiros sólidos, mas também contribuindo para um futuro mais sustentável e próspero para todos. Junte-se a nós na jornada de transformar desafios em oportunidades e criar um legado duradouro na indústria agropecuária global.</p>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-10 pl-[50px]">


                    <div className="w-full h-[150px] p-5 flex flex-row gap-10 items-center relative shadow-md rounded-sm">
                        <div className="w-[90px] h-[90px] bg-[#FDD062] rounded-full flex items-center justify-center absolute left-[-50px]">
                            <MdAssessment className="text-[45px] text-[#5F6932]" />
                        </div>
                        <div className="flex flex-col w-full pl-20 gap-2">
                            <h3 className="text-2xl">Análise de Mercado e Tendências</h3>
                            <p className="text-sm">Fornecer análises detalhadas do mercado agropecuário, identificando tendências emergentes, oportunidades de crescimento e potenciais ameaças competitivas.</p>
                        </div>
                    </div>


                    <div className="w-full h-[150px] p-5 flex flex-row items-center relative shadow-md rounded-sm">
                        <div className="w-[90px] h-[90px] bg-[#FDD062] rounded-full flex items-center justify-center absolute left-[-50px]">
                            <FaShieldAlt className="text-[45px] text-[#5F6932]" />
                        </div>
                        <div className="flex flex-col w-full pl-20 gap-2">
                            <h3 className="text-2xl">Gestão de Riscos e Seguros Agrícolas</h3>
                            <p className="text-sm">Fornecer serviços de gestão de riscos e seguros agrícolas, ajudando as empresas a proteger seus ativos contra perdas relacionadas a eventos climáticos, pragas e doenças.</p>
                        </div>
                    </div>


                    <div className="w-full h-[150px] p-5 flex flex-row items-center relative shadow-md rounded-sm">
                        <div className="w-[90px] h-[90px] bg-[#FDD062] rounded-full flex items-center justify-center absolute left-[-50px]">
                            <IoMdAnalytics className="text-[45px] text-[#5F6932]" />
                        </div>
                        <div className="flex flex-col w-full pl-20 gap-2">
                            <h3 className="text-2xl">Avaliação de Tecnologias Agrícolas Inovadoras</h3>
                            <p className="text-sm">Avaliar e recomendar tecnologias agrícolas inovadoras, como agricultura de precisão, biotecnologia e automação, para melhorar a eficiência e a sustentabilidade das operações.</p>
                        </div>
                    </div>


                    <div className="w-full h-[150px] p-5 flex flex-row items-center relative shadow-md rounded-sm">
                        <div className="w-[90px] h-[90px] bg-[#FDD062] rounded-full flex items-center justify-center absolute left-[-50px]">
                            <MdManageAccounts className="text-[45px] text-[#5F6932]" />
                        </div>
                        <div className="flex flex-col w-full pl-20 gap-2">
                            <h3 className="text-2xl">Consultoria em Gestão Agrícola e Pecuária</h3>
                            <p className="text-sm">Oferecer serviços de consultoria em gestão agrícola e pecuária, incluindo otimização de processos, melhoria da eficiência operacional, gestão de custos e aumento da produtividade.</p>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}