import client1 from '../../../assets/Testemonials/client1.png'
import client2 from '../../../assets/Testemonials/client2.png'
import client3 from '../../../assets/Testemonials/client3.png'

export function Partner() {
    return(
        <div className="partner w-full flex flex-row flex-wrap gap-10 justify-center items-center pr-10 py-28  ">
            <div className='parter-description flex flex-col gap-4 w-[37%]' data-aos="fade-down" data-aos-duration="400" >
                <h1 className='section-description text-4xl font-medium text-white'>Inovando hoje para liderar amanhã.</h1>
                <p className='text-white text-lg'>Na B.ALFA, unimos consultoria estratégica, liderança visionária e soluções de financiamento inovadoras para impulsionar o sucesso de nossos clientes hoje e liderar os negócios do amanhã</p>
            </div>
            <div className='parter-description flex flex-row flex-wrap gap-5 w-[40%] justify-end items-center'>
                <img data-aos="fade-in" data-aos-delay="200" src={client1} alt="Cliente 1" />
                <img data-aos="fade-in" data-aos-delay="500" src={client2} alt="Cliente 2" />
                <img data-aos="fade-in" data-aos-delay="700" src={client3} alt="Cliente 3" />
            </div>
        </div>
    )
}