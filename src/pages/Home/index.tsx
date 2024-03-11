import Layout from "../../layout";
import { WhatWeDo } from "../../components/homePage/whatWeDo";
import { OurWhy } from "../../components/homePage/ourWhy";
import { Service } from "../../components/homePage/service";
import { Partners } from "../../components/share/partners";
import { Partner } from "../../components/share/partner";
import ImageCarousel from "../../components/Carousel";

export default function HomePage() {
    return (
        <Layout>
            <div className="w-full">
                <ImageCarousel />
            </div>
            <OurWhy />
            <WhatWeDo />
            <div className="service w-full bg-gradient-to-r from-[#EDF5FF] to-[#CCDFF7] mt-10">
                <Service />
            </div>
            <Partner />
            <Partners />
        </Layout>
    )
}