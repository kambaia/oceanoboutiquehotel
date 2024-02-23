import Container from '../../share/container'
import Certification1 from '../../../assets/New folder/certification1.png'
import Certification2 from '../../../assets/New folder/certification2.jpg'
import Certification3 from '../../../assets/New folder/certification3.jpg'
import Certification4 from '../../../assets/New folder/certification4.jpg'

export function Certification() {
    return (
        <Container>
            <div className="py-20">
                <div data-aos="fade-down" data-aos-duration="500" className="w-full flex flex-col text-center items-center justify-center pt-20 pb-20 text-xl gap-2">
                    <h2 className="text-red-600">EVOLUÇÃO PROFISSIONAL</h2>
                    <h1 className="text-4xl font-medium">Certificações e reconhecimentos</h1>
                    <p className="w-[100px] border-b-2   border-red-500"></p>
                </div>
                <div className='w-full flex flex-row gap-5 justify-center'>
                    <div className='w-[120px]' data-aos="fade-down" data-aos-delay="100">
                        <img className='w-full' src={Certification1} alt="Certication" />
                    </div>
                    <div className='w-[500px]' data-aos="fade-down" data-aos-delay="200">
                        <img className='w-full' src={Certification2} alt="Certication" />
                    </div>
                    <div className='w-[310px] mt-8' data-aos="fade-down" data-aos-delay="300">
                        <img className='w-full' src={Certification3} alt="Certication" />
                    </div>
                    <div className='w-[350px] mt-8' data-aos="fade-down" data-aos-delay="400">
                        <img className='w-full' src={Certification4} alt="Certication" />
                    </div>
                </div>
            </div>
        </Container>
    )
}