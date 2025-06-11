import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Background and innovation images
import BackgroundImg from "/public/Rectangle 72.png";
import BgImg from "/public/Rectangle 54.png";
import Img1 from "/public/Rectangle 48 (1).png";
import Img2 from "/public/Rectangle 48 (2).png";
import Img3 from "/public/Rectangle 48 (3).png";
import Img4 from "/public/Rectangle 48 (4).png";
import Img5 from "/public/Rectangle 48 (5).png";
import Img6 from "/public/Rectangle 48 (6).png";

const innovations = [
  { img: Img1, title: "ТРЕНАЖЕР ЛЕСТНИЦА TRUE PALISADE" },
  { img: Img2, title: "ФУНКЦИОНАЛЬНЫЙ ТРЕНИНГ С COMPOSITE STRENGTH" },
  { img: Img3, title: "РАМЫ ДЛЯ СТРЕЙТЧИНГА TRUE STRETCH" },
  { img: Img4, title: "ЛАТЕРАЛЬНЫЙ ТРЕНАЖЕР TRUE TRAVERSE" },
  { img: Img5, title: "БЕГОВАЯ ДОРОЖКА TRUE ALPINE RUNNER" },
  { img: Img6, title: "ЭЛЛИПТИЧЕСКИЙ ТРЕНАЖЕР TRUE SPECTRUM" },
];

const Brand = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (

    <div>
      <Header />

      {/* Top Section with Background */}
      <div className="relative w-screen min-h-screen overflow-hidden">
        <img
          src={BackgroundImg}
          alt="Background"
          className="absolute top-0 left-0 w-screen h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#009DE0] via-white/20 to-white z-10" />

        <div className="relative z-20 flex justify-center items-center py-16 px-4">
          <div className="bg-white max-w-4xl p-8 rounded-lg shadow-lg">
            <h2 className="text-[#009DE0] text-xl font-bold uppercase mb-4">
              TRUE - СОВЕРШЕННОЕ <br /> ФИТНЕС-ОБОРУДОВАНИЕ
            </h2>
            <p className="text-[#009DE0] mb-4">
              Это совершенство обеспечивается высококачественными, долговечными
              материалами и технологиями, которые мы используем для производства
              наших машин.
            </p>
            <p className="text-gray-700 mb-4">
              Наша опытная команда предлагает комплексное обслуживание, начиная
              от планирования объекта до технического обслуживания.
            </p>
            <p className="text-gray-700 mb-4">
              Мы ориентированы на оптимизацию срока службы вашего оборудования.
              Мы всегда ищем способы расширить взаимодействие с клиентами.
            </p>
            <p className="text-[#009DE0] font-semibold">
              Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может
              помочь вашей компании добиться успеха.
            </p>
          </div>
        </div>
      </div>

      {/* Innovation Grid */}
      <section className="bg-[#00AEEF] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-12">
            Наши инновации
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {innovations.map((item, index) => (
              <div key={index} className="text-left">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-md shadow-md"
                />
                <p className="mt-4 font-semibold leading-snug">{item.title}</p>
                <div className="w-16 h-1 bg-white mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Contact Form Section */}
      <div className="min-h-screen w-full relative">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${BgImg})`
          }}
        >
          <div className="absolute w-[1450px] h-[750px] m-auto inset-0 bg-black opacity-40 bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
          <div className="text-center text-white max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ<br />
              ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ<br />
              <span className="text-blue-400">TRUE FITNESS</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl mb-12 font-light opacity-90">
              МЫ БУДЕМ РАДЫ ПРОКОНСУЛЬТИРОВАТЬ ВАС И ПОМОЧЬ С ПОДБОРОМ<br />
              ОБОРУДОВАНИЯ
            </p>

            {/* Form */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              {/* Name Input */}
              <div className="w-full md:w-auto">
                <input
                  type="text"
                  name="name"
                  placeholder="ИМЯ"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full md:w-48 h-12 px-4 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone Input */}
              <div className="w-full md:w-auto">
                <div className="flex items-center bg-white rounded-md h-12 w-full md:w-56">
                  <span className="px-3 text-gray-800 font-medium">+998</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(99) 999-99-99"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 h-full px-2 rounded-r-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="w-full md:w-auto">
                <input
                  type="email"
                  name="email"
                  placeholder="E-MAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full md:w-56 h-12 px-4 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div className="w-full md:w-auto">
                <button
                  onClick={handleSubmit}
                  className="w-full md:w-40 h-12 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  ОТПРАВИТЬ
                </button>
              </div>
            </div>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Brand;

    <>
      <Header />
      <div>Brand azim page</div>
      <Footer />
    </>
  )
}

export default Brand

