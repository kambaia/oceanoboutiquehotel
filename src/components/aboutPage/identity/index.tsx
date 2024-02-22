import Container from '../../share/container';
import Image from '../../../assets/identity.jpg'
export function Identity() {
    return (
        <Container>
            <div className="flex flex-row flex-wrap items-center justify-around ">


                <div className="flex flex-col py-32 max-lg:p-0   ">
                    <div className="flex flex-row gap-5 h-[500px] max-lg:h-auto">
                        <div className="w-[20px] h-[250px] bg-red-600 rounded-md max-lg:hidden"></div>
                        <div className='w-[500px] max-lg:w-full'>
                            <img src={Image} alt="Identity" className='w-full rounded-md' />
                        </div>
                    </div>
                    <div className='bg-white p-10 w-[300px] rounded-md flex flex-row items-end gap-1 mt-[-120px] max-lg:hidden'>
                        <p className='text-red-600 text-5xl font-bold'>Macro</p>
                        <p className='font-bold text-lg text-gray-500'>identidade.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 w-[520px] text-gray-800 text-base text-justify max-lg:w-full max-lg:mt-5'>
                    <h1 className='font-bold text-4xl' >QUEM SOMOS!</h1>
                    <p>Para atender a demanda dos nossos emprendedores, a B.Alfa desenvolveu um conjuto de ferramentas e técnicas e competências distintas. No dominíno da formação entregamos aos clientes conhecimentos práticos de gestão, finanças empresariais, markting gestão agraria e práticas de cultivo e fitossanidade.</p>
                    <p>No dominío da gestão de negócios actuamos prestando um serviço de consultoria voltado à prática trabalhando em conjunto com micro, pequenos e médios empresarios nas suas necessidades para melhorar a performance e os resultados.</p>
                    <p>Como entregaveis aos clientes temos produtos como planos de negócios, Estudos Financeiros e Análise de Viabilidade, Planos de Marketing e Estudos de Mercado, aconselhamento técnico na agricultura, para investidores extrangeiros criamos o pilar BUSNESS OPPORTUNITAES IN ANGOLA(Teaser and Due Diligence) com fim de apresentar informações estrturadas sobre qualquer áres de interesse do investor.</p>
                    <p>Alem de área de consultoria actuamos no sector agricola com produções de leguminosas e legumes.</p>
                </div>

            </div>
        </Container>
    )
}