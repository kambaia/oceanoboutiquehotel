import Layout from "../../layout";
import { Navbar } from "../../components/Header/Navbar";
import { TopBanner } from "../../components/share/topBanner";
import Container from "../../components/share/container";
import { IoIosConstruct } from "react-icons/io";

export default function Agro() {
    return (
        <Layout>
            <div className="w-full bg-white relative">
                <Navbar />
            </div>
            <TopBanner title="Agropecuária" tipo="contact-banner" />

            <Container>
                <div className="w-full flex flex-col gap-5 justify-center items-center m-5 p-52 bg-red-600">
                    <IoIosConstruct className="text-6xl text-white" />
                    <h1 className="text-5xl text-white">PÁGINA EM CONSTRUÇÃO</h1>
                </div>
            </Container>

        </Layout>
    )
}