/* import client1 from '../../../assets/Testemonials/client1.png'
import client2 from '../../../assets/Testemonials/client2.png'
import client3 from '../../../assets/Testemonials/logo-parceiro.jpeg' */

type background = {
    page: string,
    title: string,
    content: string
}

export function Partner({page, title, content}: background) {
    return(
        <div className={`${page} w-full flex flex-row flex-wrap gap-10 justify-center items-center pr-10 py-28`}>
            <div className='parter-description flex flex-col gap-4 w-[37%]' data-aos="fade-down" data-aos-duration="400" >
                <h1 className='section-description text-4xl font-medium text-white'>{title}</h1>
                <p className='text-white text-lg'>{content}</p>
            </div>
            <div className='parter-description flex flex-row flex-wrap gap-5 w-[40%] justify-end items-center'>
                {/* <img data-aos="fade-in" data-aos-delay="200" src={client1} alt="Cliente 1" />
                <img data-aos="fade-in" data-aos-delay="500" src={client2} alt="Cliente 2" />
                <img data-aos="fade-in" data-aos-delay="700" src={client3} alt="Cliente 3" /> */}
            </div>
        </div>
    )
}