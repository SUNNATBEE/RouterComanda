import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'

//Abdulatif qilgan

export default function TrueGymForm() {
  return (
    <div>
    <Header/>
    <div className="min-h-screen flex flex-col items-center">

      {/* Header */}
      <div className="bg-[#00B0F0] w-full py-4 text-center text-white font-bold text-sm sm:text-lg">
        ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE
      </div>

      {/* Image */}
      <img
        src="./Club-img.png"
        alt="Club Layout"
        className="w-full max-w-4xl mt-6 px-4"
      />

      {/* Form */}
      <div className="bg-white shadow-md rounded-md mt-10 p-8 w-full max-w-xl mb-10">
        <h2 className="text-center text-xl font-semibold mb-6">ОТПРАВИТЬ ЗАЯВКУ</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="border p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border p-3 rounded-md"
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            className="border p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Город"
            className="border p-3 rounded-md"
          />

          <select className="border p-3 rounded-md">
            <option>ДРУГИЕ ОТКРЫТЫЕ</option>
            <option>ТРЦ</option>
            <option>БИЗНЕС-ЦЕНТР</option>
            <option>ЖИЛОЙ КОМПЛЕКС</option>
            <option>СТРИТ-РИТЕЙЛ (1 ЭТАЖ ИЛИ ПОДВАЛ)</option>
            <option>ДРУГОЙ ФОРМАТ</option>
          </select>

          <input
            type="text"
            placeholder="Площадь помещения"
            className="border p-3 rounded-md"
          />

          <button
            type="submit"
            className="bg-[#00B0F0] text-white py-3 rounded-md font-semibold hover:bg-[#0090d0]"
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </div>

      <Footer />
    
    </div>
    
  );
}
