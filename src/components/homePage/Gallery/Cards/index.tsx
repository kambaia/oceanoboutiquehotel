
import { services } from "../../../../utils/services";
export function WeDoCards() {
  return (
    <>
   <div className="grid grid-col-1 md:grid-cols-4 gap-2 items-center justify-center rounded-md py-5">
      {services.map((service) => (
        <div className="grid grid-col-1 md:grid-cols-4 items-center justify-center rounded-md" >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-md">
            <div className="rounded-md w-[300px] left-0 right-0 bg-blue-500 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-[400px] w-[300px] rounded-md">
                <img className="h-full rounded-md w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={service.image} alt="Imagem" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-xl font-bold text-white">{service.title}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}