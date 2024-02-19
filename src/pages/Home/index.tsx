import Layout from "../../layout";
import { WhatWeDo } from "../../components/homePage/whatWeDo";
import { WhatWeGive } from "../../components/homePage/whatWeGive";
import { OurWhy } from "../../components/homePage/ourWhy";
import { Service } from "../../components/homePage/service";
import { Certification } from "../../components/homePage/ourCertifications";
import { Notices } from "../../components/homePage/news";
import { Partners } from "../../components/share/partners";
import { Partner } from "../../components/share/partner";
import ImageCarousel from "../../components/Carousel";

export default function HomePage() {

    return ( 
        <Layout>
            <div className="w-full">
                <ImageCarousel />
            </div>
            <WhatWeDo />
            <div className="w-full bg-gradient-to-r from-[#EDF5FF] to-[#CCDFF7] my-10">
                <WhatWeGive />
            </div>
            <OurWhy />
            <div className="service w-full bg-gradient-to-r from-[#EDF5FF] to-[#CCDFF7] my-10">
                <Service />
            </div>
            <Certification />
            <Partner />
            <div className="w-full bg-gradient-to-r from-[#EDF5FF] to-[#CCDFF7] my-10">
                <Notices />
            </div>
            <Partners />
        </Layout>
    )
}