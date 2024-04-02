import Layout from "../../layout";
import Container from "../../components/share/container"
import { Partner } from "../../components/share/partner";
import { Navbar } from "../../components/Header/Navbar"
import { services } from "../../utils/services";
import { TopBanner } from "../../components/share/topBanner"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react";


export default function SingleService() {

    const { pageCategory } = useParams() as any;
    const myServices = services.find((item) => item.url === pageCategory)
    const conteudo = myServices?.content
    const navigate = useNavigate();
        
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigate]);

    return (
        <Layout>
            <div className="w-full bg-white relative">
                <Navbar />
            </div>
            <TopBanner title={myServices?.title} tipo="contact-banner text-center" />
            <Container>
                <div className="flex flex-row flex-wrap justify-around gap-0 py-20 max-lg:py-0 max-lg:pb-10">

                    <div className="flex flex-col justify-center gap-4 max-w-2xl py-20 m-0 p-0">
                        <div className="w-full flex items-end justify-end">
                            <div className="w-20 h-20 bg-red-500 "></div>
                        </div>
                        <h1 className="uppercase text-red-600 text-xl font-medium">{myServices?.title}</h1>

                        {conteudo?.map((text) => (
                            <>
                                <h1 className="capitalize text-black text-3xl font-bold">{text.title}</h1>
                                <div className="pr-10 flex flex-col gap-4 max-lg:p-0 max-lg:w-full">
                                    <p className="text-base text-gray-500 text-justify">{text.section}</p>
                                    <p className="text-base text-gray-500 text-justify">{text.sectionB}</p>
                                    <p className="text-base text-gray-500 text-justify">{text.sectionC}</p>
                                </div>
                            </>
                        ))}
                    </div>

                    <div className="m-0 p-0 max-lg:w-full">
                        {conteudo?.map((image) => (
                            <>
                                <div className={`h-[700px] w-[580px] bg-cover bg-center text-center relative z-20 max-lg:w-full max-lg:h-[500px]`}>
                                    <img src={image.image} alt="Background Image" className="w-full align-middle h-full object-cover object-center max-lg:w-full" />
                                </div>
                                <div className={`h-[700px] w-[580px] mt-[-675px] ml-[25px] z-10 bg-gray-100 text-center max-lg:hidden`}></div>
                            </>
                        ))}
                    </div>

                </div>
            </Container>
            <Partner />
        </Layout>
    )
}