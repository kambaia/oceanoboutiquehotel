import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingSlider({ subtitle }: any) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('/your-image.jpg')` }}>
      <div className="inset-0 bg-opacity-60 flex justify-center flex-col mb-24 items-center w-full">

        <div className="bg-black absolute bottom-16 bg-opacity-80 p-10 w-[60%] rounded-lg border-l-4 border-[#4C96FF] text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-center">Reservar um quarto online</h2>

          <div className="flex flex-row flex-wrap justify-center items-center gap-3">
            {subtitle && <p className="text-base text-gray-300 text-center">{subtitle}</p>}

            {/* Data de Entrada */}
            <div className="flex flex-col">
              <label htmlFor="arrival" className="block mb-1 text-sm">Entrada</label>
              <div className="flex items-center border border-white p-2 rounded bg-transparent">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/aaaa"
                  className="bg-transparent text-white placeholder-white outline-none w-full"
                  calendarClassName="bg-white text-black"
                />
                <span className="text-xl ml-2 cursor-pointer">📅</span>
              </div>
            </div>

            {/* Data de Saída */}
            <div className="flex flex-col">
              <label htmlFor="departure" className="block mb-1 text-sm">Saída</label>
              <div className="flex items-center border border-white p-2 rounded bg-transparent">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/aaaa"
                  className="bg-transparent text-white placeholder-white outline-none w-full"
                  calendarClassName="bg-white text-black"
                />
                <span className="text-xl ml-2 cursor-pointer">📅</span>
              </div>
            </div>

            {/* Adultos */}
            <div className="flex flex-col">
              <label htmlFor="adults" className="block mb-1 text-sm">Adultos</label>
              <select
                id="adults"
                className="bg-transparent text-white border border-white p-3 rounded outline-none"
              >
                {[...Array(5)].map((_, i) => (
                  <option key={i} value={i} className="text-black">
                    {`${i} - ${i > 1 ? 'Adultos' : 'Adulto'}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Crianças */}
            <div className="flex flex-col">
              <label htmlFor="children" className="block mb-1 text-sm">Crianças</label>
              <select
                id="children"
                className="bg-transparent text-white border border-white p-3 rounded outline-none"
              >
                {[...Array(5)].map((_, i) => (
                  <option key={i} value={i} className="text-black">
                    {`${i} - ${i > 1 ? 'Crianças' : 'Criança'}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Botão Reservar */}
            <div className="w-48 flex justify-center items-center relative -mb-3">
              <button className="bg-[#4C96FF] hover:bg-[#4679c1] text-white py-3 px-6 rounded-full w-full font-semibold text-lg">
                Reservar
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
