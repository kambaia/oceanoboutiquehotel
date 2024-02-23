import Container from '../container'
import partner1 from '../../../assets/Partners/partner1.png'
import partner2 from '../../../assets/Partners/partner2.png'
import partner3 from '../../../assets/Partners/partner3.png'
import partner4 from '../../../assets/Partners/partner4.png'

export function Partners() {
    return (
        <Container>
            <div className='py-10 '>
                <div data-aos="fade-down" data-aos-duration="600" className="w-full flex flex-col text-center items-center justify-center pb-10 text-xl gap-2">
                    <h2 className="text-red-600">PARCEIROS</h2>
                    <h1 className="text-4xl font-medium">Alguns dos nossos parceiros</h1>
                </div>
                <div className='w-full flex flex-row flex-wrap justify-between'>
                    <img data-aos="fade-left" data-aos-delay="100" src={partner1} alt="Partner" />
                    <img data-aos="fade-left" data-aos-delay="300" src={partner2} alt="Partner" />
                    <img data-aos="fade-left" data-aos-delay="500" src={partner3} alt="Partner" />
                    <img data-aos="fade-left" data-aos-delay="700" src={partner4} alt="Partner" />
                </div>
            </div>
        </Container>
    )
}