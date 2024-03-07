import Container from '../container'
import partner1 from '../../../assets/Partners/logo-parceiro.jpeg'
import partner2 from '../../../assets/Partners/tchingando.png'

export function Partners() {
    return (
        <Container>
            <div className='py-20 '>
                <div data-aos="fade-down" data-aos-duration="600" className="w-full flex flex-col text-center items-center justify-center pb-10 text-xl gap-2">
                    <h2 className="text-red-600">PARCEIROS</h2>
                    <h1 className="text-4xl font-medium">Alguns dos nossos parceiros</h1>
                </div>
                <div className='w-full flex flex-row flex-wrap justify-center gap-20'>
                    <img className='w-44' data-aos="fade-down" data-aos-delay="100" src={partner1} alt="Partner" />
                    <img className='w-44' data-aos="fade-down" data-aos-delay="300" src={partner2} alt="Partner" />
                </div>
            </div>
        </Container>
    )
}