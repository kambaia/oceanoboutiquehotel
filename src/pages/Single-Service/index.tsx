import Layout from "../../layout";
import Container from "../../components/share/container"
import { Partner } from "../../components/share/partner";
import { Navbar } from "../../components/Header/Navbar"
import { services } from "../../utils/services";
import { TopBanner } from "../../components/share/topBanner"
import { useParams } from 'react-router-dom'


export default function SingleService() {

    const { pageCategory } = useParams() as any;
    const myServices = services.find((item) => item.url === pageCategory)
    const conteudo = myServices?.content

    return (
        <Layout>
            <div className="w-full bg-white relative">
                <Navbar />
            </div>
            <TopBanner title={myServices?.title} tipo="contact-banner" />
            <Container>
                <div className="flex flex-row justify-around gap-0 py-20">

                    <div className="flex flex-col justify-center gap-4 max-w-2xl py-20 m-0 p-0">
                        <div className="w-full flex items-end justify-end">
                            <div className="w-20 h-20 bg-red-500 "></div>
                        </div>
                        <h1 className="uppercase text-red-600 text-xl font-medium">{myServices?.title}</h1>

                        {conteudo?.map((text) => (
                            <>
                                <h1 className="capitalize text-black text-3xl font-bold">{text.title}</h1>
                                <div className="pr-10 flex flex-col gap-4">
                                    <p className="text-base text-gray-500 text-justify">{text.section}</p>
                                    <p className="text-base text-gray-500 text-justify">{text.sectionB}</p>
                                    <p className="text-base text-gray-500 text-justify">{text.sectionC}</p>
                                </div>
                            </>
                        ))}
                    </div>

                    <div className="m-0 p-0">
                        {conteudo?.map((image) => (
                            <>
                                <div className={`h-[720px] w-[600px] bg-cover bg-center text-center relative z-20`}>
                                    <img src={image.image} alt="Background Image" className="w-full align-middle h-full object-cover object-center" />
                                </div>
                                <div className={`h-[720px] w-[600px] mt-[-695px] ml-[25px] z-10 bg-gray-100 text-center `}></div>
                            </>
                        ))}
                    </div>
                </div>
            </Container>
            <Partner />
        </Layout>
    )
}