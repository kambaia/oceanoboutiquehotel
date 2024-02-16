import client1 from '../../../assets/Testemonials/client1.png'
import client2 from '../../../assets/Testemonials/client2.png'
import client3 from '../../../assets/Testemonials/client3.png'

export function Partner() {
    return(
        <div className="partner w-full flex flex-row gap-10 justify-end items-center pr-10 py-28 bg-[#1273EB] relative right-36">
            <div className='flex flex-col gap-4 w-[37%]'>
                <h1 className='text-4xl font-medium text-white'>Agradecemos a confiança dos nossos clientes.</h1>
                <p className='text-gray-200 text-base'>A Macro Consulting tem como missão e foco solucionar os problemas empresariais dos nossos clientes nas mais diversas áreas da gestão, procurando entregar o nosso melhor, todos os dias.</p>
            </div>
            <div className='flex flex-row gap-5 w-[40%] justify-end items-center'>
                <img src={client1} alt="Cliente 1" />
                <img src={client2} alt="Cliente 2" />
                <img src={client3} alt="Cliente 3" />
            </div>
        </div>
    )
}