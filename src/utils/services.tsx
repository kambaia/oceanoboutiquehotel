import ServiceImage1 from '../assets/services/ESTUDOS FINANCEIROS E ANÁLISE DE VIABILIDADE.jpg'
import ServiceImage2 from '../assets/services/PLANOS DE MARKETING E ESTUDOS DE MERCADO_.jpg'
import ServiceImage3 from '../assets/services/DESIGNER GRAFICO.jpg'

import { GoDotFill } from "react-icons/go";

export function Marketing(){
    return(
        <div className='flex flex-col gap-0 pl-8'>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />Criação de Logotipos; </p>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />Vetorização de imagens; </p>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />Produção de Banners; </p>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />Criação de imagens publicitárias;</p>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />Assinaturas de emails; </p>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />Criação de Capas para Redes Sociais; </p>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />Convites; </p>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />Tags personalizadas; </p>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />Tratamento de imagens; </p>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />Portfólios; </p>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />Produção de Revistas; </p>
            <p className='flex flex-row gap-1 text-base items-center'><GoDotFill />E muito mais!</p>
        </div>
    )
}

export const services = [
    {
        title: "Suíte Executiva",
        description: "Analisamos o potencial do seu negócio ou ideia, prestando serviços de aconselhamento estratégico que representam uma importante mais valia na alavancagem de um negócio.",
        image: '/imagens/OCEANO-13.png',
        url: "estudos-financeiros",
        content: [
            {
                title: "Gestão Financeira Estratégica",
                section: "Analisamos o potencial do seu negócio ou ideia e prestamos serviços de consultoria estratégica que proporcionam um valor acrescentado valioso na captação de negócios.  Avaliamos a rentabilidade e sustentabilidade de um projeto ou investimento utilizando indicadores como ROI, período de retorno, TIR e VPL para determinar a sua viabilidade financeira e retornos potenciais.",
                sectionB: "Analisamos os riscos associados a um projeto, incluindo fatores econômicos, competitivos e regulatórios governamentais, e desenvolvemos estratégias para mitigar esses riscos e garantir o sucesso financeiro do projeto.",
                sectionC: "Com base em análises aprofundadas, fornecemos recomendações estratégicas claras e práticas para orientar as decisões de negócios, aumentar o valor para as partes interessadas e impulsionar o crescimento sustentável.",
                image: ServiceImage1,
            }
        ]
    },
    {
        title: "Suíte Executiva",
        description: "Por forma a garantir que atingirá o seu público-alvo da forma mais rentável e eficiente, é essencial o investimento num forte e estruturado plano de comunicação e de marketing...",
        image: '/imagens/OCEANO-03.png',
        url: "planos-marketing",
        content: [
            {
                title: "Análise detalhada do mercado",
                section: "Para atingir o seu público-alvo da forma mais econômica e eficiente, é importante investir em pesquisas de mercado precisas, bem como em um plano de comunicação e marketing preciso e sistemático.  Com base em análises e insights de mercado, trabalhamos com você para desenvolver planos de marketing personalizados e estratégias de posicionamento de marca que sejam eficazes, direcionadas e alinhadas com seus objetivos de negócios.",
                sectionB: "Depois de desenvolver seu plano de marketing, ajudamos você a implementar a estratégia que criou, monitorar continuamente o desempenho e ajustar as táticas conforme necessário para garantir resultados consistentes e maximizar o retorno do investimento.",
                sectionC: "Analisamos regularmente os resultados dos nossos planos de marketing utilizando indicadores-chave de desempenho (KPIs) para medir o sucesso das nossas estratégias e identificar áreas de melhoria e oportunidades de otimização.",
                image: ServiceImage2,
            }
        ]
    },
    {
        title: "Suíte Presidencial",
        description: "Na Criações Gráficas Expressivas, mergulhamos no mundo da arte visual e da comunicação eficaz para oferecer soluções gráficas excepcionais que cativam e inspiram.",
        image: '/imagens/OCEANO-11.png',
        url: "graficas-digitais",
        content: [
            {
                title: "Uma obra de arte profissional para o seu produto ou negócio!",
                section: "O que um designer gráfico pode fazer: B.Alpha oferece muitos tipos diferentes de arte . Deixe-me listar alguns: Se você não o encontrar listado, entre em contato conosco!",
                sectionB: <Marketing/>,
                sectionC: "Tudo isso pode ser feito em alta definição se você precisar! Fornecemos impressão de diversos tipos de materiais, incluindo cartões de visita, folhetos, banners, formulários, portfólios e revistas.",
                image: ServiceImage3,
            }
        ]
    },
    {
        title: "Quarto Luxo",
        description: "Na Visão Global Digital, oferecemos soluções de marketing digital sob medida para impulsionar a presença online e o sucesso de nossos clientes.",
        image: '/imagens/OCEANO-05.png',
        url: "marketing-digital",
        content: [
            {
                title: "Conecte sua marca ao sucesso online",
                section: "Na B.Alfa sabemos que cada empresa é única. É por isso que fornecemos soluções de marketing digital adaptadas às necessidades específicas do seu negócio.",
                sectionB: "Desde a criação de campanhas de mídia social até a otimização de mecanismos de pesquisa (SEO) e email marketing, desenvolvemos estratégias personalizadas para melhorar sua presença online e atingir seus objetivos de negócios.  Nosso objetivo não é apenas aumentar o tráfego para  seu site. Na B.Alfa, nos esforçamos para gerar um envolvimento significativo com seu público-alvo  e converter clientes potenciais em clientes.",
                sectionC: "A análise detalhada identifica oportunidades para melhorar sua jornada digital desde a primeira interação até a última conversão. Sabemos que  transparência e medição são fundamentais para o sucesso da sua estratégia de marketing digital. B.Alfa fornece relatórios detalhados e análises de desempenho para acompanhar o andamento de suas campanhas. Use ferramentas analíticas avançadas para monitorar métricas importantes, como taxas de conversão, retorno do investimento (ROI) e envolvimento do usuário.",
                image: '/imagens/OCEANO-05.png',
            }
        ]
    },
    {
        title: "Suíte Presidencial",
        description: "Para garantir que o produtor agricola tenha sucesso e alta produtividade prestamos apoio técnico agricola na produção de leguminosas, frutas e hortaliças.",
        image: '/imagens/OCEANO-06.png',
        url: "aconselhamento-tecnico",
        content: [
            {
                title: "Avaliação e Diagnóstico Agronômico",
                section: "Para garantir que o produtor agricola tenha sucesso e alta produtividade prestamos apoio técnico agricola na produção de leguminosas, frutas e hortaliças.",
                sectionB: "Com base na avaliação agronômica, oferecemos recomendações específicas para cultivo e manejo de culturas, incluindo seleção de culturas adequadas, práticas de plantio, manejo de pragas e doenças, fertilização e irrigação, visando otimizar o rendimento e a qualidade dos produtos agrícolas.",
                sectionC: "Aconselhamos sobre práticas de conservação de recursos naturais, como manejo sustentável do solo, conservação da água, rotação de culturas e uso eficiente de insumos agrícolas, promovendo a saúde do solo, a biodiversidade e a resiliência do ecossistema agrícola.",
                image: '/imagens/OCEANO-06.png',
            }
        ]
    },
    {
        title: "Quarto Luxo",
        description: "Para investidores extrangeiros com pretensão de fazer negócios em Angola , oferecemos um serviço especializado com produção de informações sobre o sector de interesse...",
            image: '/imagens/OCEANO-07.png',
        url: "business-oportunities",
        content: [
            {
                title: "Teaser and Due Diligence",
                section: "Para investidores extrangeiros com pretensão de fazer negócios em Angola , oferecemos um serviço especializado com produção de informações sobre o sector de interesse, o tipo de negócio , potenciais parceiros em formatos de  Teaser e due diligence.",
                sectionB: "Com base em nossa experiência local e conhecimento da indústria, oferecemos serviços de consultoria de investimentos personalizados para orientar investidores no processo de avaliação e aproveitamento de oportunidades de negócios promissoras em Angola, garantindo tomadas de decisão informadas e mitigação de riscos.",
                sectionC: "Facilitamos parcerias estratégicas e oportunidades de networking conectando investidores a partes interessadas-chave, players da indústria, agências governamentais e empresas locais em Angola, promovendo colaborações que impulsionam o crescimento e a expansão dos negócios. Auxiliamos clientes no desenvolvimento de estratégias eficazes de entrada no mercado adaptadas às características únicas do mercado angolano, incluindo posicionamento de mercado, canais de distribuição, campanhas de marketing e conformidade regulatória, para maximizar suas chances de sucesso.",
                    image: '/imagens/OCEANO-07.png',
            }
        ]
    },
    {
        title: "Quarto Luxo",
        description: "A avaliação de empresas e negócios consiste no processo usado para determinar o valor de uma entidade ou negócio, com o intuito de exercer uma atividade económica.",
          image: '/imagens/OCEANO-08.png',
        url: "avaliacao-empresas",
        content: [
            {
                title: "Análise Financeira Detalhada",
                section: "A avaliação de empresas e negócios consiste no processo usado para determinar o valor de uma entidade ou negócio, com o intuito de exercer uma atividade económica. Existem diversos modelos e técnicas passíveis de serem utilizadas para o apuramento do valor da empresa ou negócio, desde as mais simples às mais complexas. Todos esses modelos e técnicas são válidos, devendo o avaliador encontrar os melhores modelos e técnicas adaptados ao modelo de negócios e respetivas características da empresa.",
                sectionB: "É fundamental conhecer o valor real da sua empresa ou negócio para as decisões estratégicas. A este nível, com o crescente aumento de M&A (Fusões e Aquisições), são várias as oportunidades para empresas e negócios poderem expandir por esta via ou através de investidores externos.",
                sectionC: "Um mito comum entre muitas empresas é que só devem conhecer a avaliação da sua empresa quando procuram vendê-la. E é aqui que as empresas acabam por obter menos do que aquilo que desejam em termos de resultados.",
                  image: '/imagens/OCEANO-08.png',
            }
        ]
    },
    {
       title: "Suíte Presidencial",
        description: "A avaliação de empresas e negócios consiste no processo usado para determinar o valor de uma entidade ou negócio, com o intuito de exercer uma atividade económica.",
          image: '/imagens/OCEANO-14.png',
        url: "avaliacao-empresas",
        content: [
            {
                title: "Análise Financeira Detalhada",
                section: "A avaliação de empresas e negócios consiste no processo usado para determinar o valor de uma entidade ou negócio, com o intuito de exercer uma atividade económica. Existem diversos modelos e técnicas passíveis de serem utilizadas para o apuramento do valor da empresa ou negócio, desde as mais simples às mais complexas. Todos esses modelos e técnicas são válidos, devendo o avaliador encontrar os melhores modelos e técnicas adaptados ao modelo de negócios e respetivas características da empresa.",
                sectionB: "É fundamental conhecer o valor real da sua empresa ou negócio para as decisões estratégicas. A este nível, com o crescente aumento de M&A (Fusões e Aquisições), são várias as oportunidades para empresas e negócios poderem expandir por esta via ou através de investidores externos.",
                sectionC: "Um mito comum entre muitas empresas é que só devem conhecer a avaliação da sua empresa quando procuram vendê-la. E é aqui que as empresas acabam por obter menos do que aquilo que desejam em termos de resultados.",
                  image: '/imagens/OCEANO-14.png',
            }
        ]
    },
    {
       title: "Suíte Presidencial",
        description: "A avaliação de empresas e negócios consiste no processo usado para determinar o valor de uma entidade ou negócio, com o intuito de exercer uma atividade económica.",
          image: '/imagens/OCEANO-15.png',
        url: "avaliacao-empresas",
        content: [
            {
                title: "Análise Financeira Detalhada",
                section: "A avaliação de empresas e negócios consiste no processo usado para determinar o valor de uma entidade ou negócio, com o intuito de exercer uma atividade económica. Existem diversos modelos e técnicas passíveis de serem utilizadas para o apuramento do valor da empresa ou negócio, desde as mais simples às mais complexas. Todos esses modelos e técnicas são válidos, devendo o avaliador encontrar os melhores modelos e técnicas adaptados ao modelo de negócios e respetivas características da empresa.",
                sectionB: "É fundamental conhecer o valor real da sua empresa ou negócio para as decisões estratégicas. A este nível, com o crescente aumento de M&A (Fusões e Aquisições), são várias as oportunidades para empresas e negócios poderem expandir por esta via ou através de investidores externos.",
                sectionC: "Um mito comum entre muitas empresas é que só devem conhecer a avaliação da sua empresa quando procuram vendê-la. E é aqui que as empresas acabam por obter menos do que aquilo que desejam em termos de resultados.",
                  image: '/imagens/OCEANO-15.png',
            }
        ]
    },
    {
        title: "Suite Júnior",
        description: "Uma experiência mais luxuosa com sala de estar integrada. A combinação ideal entre estilo e funcionalidade.",
        image: '/imagens/OCEANO-11.png',
        url: "suite-junior",
        content: [
            {
                title: "Elegância e Espaço",
                section: "A Suite Júnior oferece uma zona de estar com sofá, perfeita para receber visitas ou relaxar em maior privacidade.",
                sectionB: "Design moderno, cama king-size, amenities especiais e serviço personalizado para tornar a sua estadia memorável.",
                sectionC: "Inclui roupão, chinelos, máquina de café, água de cortesia e late check-out mediante disponibilidade.",
                image: ServiceImage3,
            }
        ]
    },
    {
        title: "Quarto Familiar",
        description: "Ideal para famílias com crianças. Espaço amplo com configuração flexível para até 4 pessoas.",
        image: '/imagens/OCEANO-06.png',
        url: "quarto-familiar",
        content: [
            {
                title: "Conforto em Família",
                section: "O Quarto Familiar combina espaço, segurança e comodidades adaptadas para estadias com crianças.",
                sectionB: "Disponível com berço, cama extra, televisão com canais infantis e opções de refeições kids-friendly.",
                sectionC: "Serviço de baby-sitting mediante agendamento e atividades recreativas aos fins de semana.",
                image: '/imagens/OCEANO-06.png',
            }
        ]
    },
    {
        title: "Quarto Adaptado",
        description: "Projetado para mobilidade reduzida, com total acessibilidade e conforto.",
        image: '/imagens/OCEANO-07.png',
        url: "quarto-adaptado",
        content: [
            {
                title: "Acessibilidade e Bem-estar",
                section: "Ambientes amplos, portas largas, casa de banho adaptada e barras de apoio garantem total segurança.",
                sectionB: "Localização estratégica dentro do hotel, com acesso facilitado a todos os serviços e elevadores.",
                sectionC: "Atendimento treinado e suporte personalizado para proporcionar independência e conforto.",
                image: '/imagens/OCEANO-07.png',
            }
        ]
    },
]