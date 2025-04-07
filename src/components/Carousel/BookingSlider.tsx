import React from "react";

export default function BookingSlider({ title, subtitle }: any) {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('/your-image.jpg')` }}>
      <div className="absolute inset-0  bg-opacity-60 flex justify-center items-center">
        <div className="bg-black bg-opacity-80 p-10 w-full max-w-[500px] h-[400px] rounded-lg border-l-4 border-[#4C96FF] text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-center">Reservar um quarto online</h2>
          {subtitle && <p className="text-base text-gray-300 mb-6 text-center"></p>}

          <label htmlFor="arrival" className="block mb-1 text-sm">Arrival</label>
          <div className="flex items-center border border-white p-2 rounded mb-4">
            <input
              id="arrival"
              type="text"
              placeholder="dd/mm/aaaa"
              className="bg-transparent text-white placeholder-white outline-none w-full"
            />
            <span className="text-xl ml-2">📅</span>
          </div>

          <label htmlFor="departure" className="block mb-1 text-sm">Departure</label>
          <div className="flex items-center border border-white p-2 rounded mb-6">
            <input
              id="departure"
              type="text"
              placeholder="dd/mm/aaaa"
              className="bg-transparent text-white placeholder-white outline-none w-full"
            />
            <span className="text-xl ml-2">📅</span>
          </div>

          <button className="bg-[#4C96FF] hover:bg-[#4679c1] text-white py-2 px-6 rounded-full w-full font-semibold text-lg">
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}