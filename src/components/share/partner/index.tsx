import client1 from '../../../assets/Testemonials/client1.png'
import client2 from '../../../assets/Testemonials/client2.png'
import client3 from '../../../assets/Testemonials/client3.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export function Partner() {
    return(
        <div className=" partner w-full flex flex-row gap-10 justify-center items-center pr-10 py-28  ">
            <div className='flex flex-col gap-4 w-[37%]' data-aos="fade-left" data-aos-duration="400" >
                <h1 className='text-4xl font-medium text-white'>Agradecemos a confiança dos nossos clientes.</h1>
                <p className='text-white text-lg'>A B.ALFA tem como missão e foco solucionar os problemas empresariais dos nossos clientes nas mais diversas áreas da gestão, procurando entregar o nosso melhor, todos os dias.</p>
            </div>
            <div className='flex flex-row gap-5 w-[40%] justify-end items-center'>
                <img data-aos="fade-in" data-aos-delay="200" src={client1} alt="Cliente 1" />
                <img data-aos="fade-in" data-aos-delay="500" src={client2} alt="Cliente 2" />
                <img data-aos="fade-in" data-aos-delay="700" src={client3} alt="Cliente 3" />
            </div>
        </div>
    )
}