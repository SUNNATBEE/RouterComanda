import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Header />



      <section className="relative min-h-screen bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('public/Rectangle 1.png')`
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center px-6 max-w-4xl mx-auto">

            {/* Play Button */}
            <div className="mb-12">
              <button

                className="group relative inline-flex items-center justify-center w-20 h-20 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                ▶

                {/* Pulse animation rings */}
                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30"></div>
                <div className="absolute inset-2 rounded-full bg-blue-400 animate-pulse opacity-20"></div>
              </button>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-2">TRUE FITNESS</span>
              <span className="block text-3xl md:text-5xl lg:text-6xl">ПРЕМИУМ</span>
              <span className="block text-2xl md:text-4xl lg:text-5xl font-normal mt-4">
                ТРЕНАЖЕРЫ ИЗ США
              </span>
            </h1>

            {/* Animated scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Blue Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 py-8">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                TRUE - ВЕДУЩИЙ МИРОВОЙ
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-white font-light">
                ПРОИЗВОДИТЕЛЬ ПРЕМИАЛЬНОГО ФИТНЕС ОБОРУДОВАНИЯ
              </p>
            </div>
          </div>
        </div>

        {/* Background Animation Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-16 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-white rounded-full animate-ping delay-200"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-75"></div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                  TRUE
                </h2>
                <h3 className="text-5xl lg:text-6xl font-bold text-blue-500 mb-8">
                  FITNESS
                </h3>

                {/* Yellow line */}
                <div className="w-16 h-1 bg-yellow-400 mb-8"></div>

                <p className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-12">
                  СОВРЕМЕННОЕ И<br />
                  НАДЕЖНОЕ<br />
                  ОБОРУДОВАНИЕ ДЛЯ<br />
                  ФИТНЕС-КЛУБОВ
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex items-center">
                <div className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300 cursor-pointer group">
                  <span className="text-xl lg:text-2xl font-bold uppercase mr-4">
                    КАРДИО<br />ТРЕНАЖЕРЫ
                  </span>

                </div>
              </div>
            </div>

            {/* Right Content - Equipment Image */}
            <div className="relative">
              {/* Blue geometric background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-12 rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-300 to-blue-500 transform -rotate-6 rounded-3xl opacity-80"></div>

              {/* Equipment Image */}
              <div className="relative z-10">
                <img
                  src="image 6.png"
                  alt="TRUE FITNESS Treadmill"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-300 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Bottom decorative dots */}
          <div className="flex justify-center mt-16 space-x-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Top Left - Best Characteristics */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
              <div
                className="h-80 bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('public/00_rec.png')`
                }}
              >
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-4">
                      ЛУЧШИЕ<br />
                      ХАРАКТЕРИСТИКИ
                    </h3>
                    <div className="w-16 h-1 bg-yellow-400 mb-4"></div>
                    <p className="text-sm leading-relaxed opacity-90">
                      Тренажеры имеют самые современные и<br />
                      инновационные характеристики от мировых<br />
                      новаторов до индивидуальных функций спортивных<br />
                      возможностей
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right - Low Cost Ownership */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                НИЗКАЯ СТОИМОСТЬ<br />
                ВЛАДЕНИЕ
              </h3>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-sm leading-relaxed opacity-90">
                Надежность Оборудования Обеспечивает Низкие Затраты На<br />
                Сервисное Обслуживание. Так Что Владельцы Затратят На<br />
                Эксплуатацию TRUE Будут Гораздо У Удобержном
              </p>
            </div>

            {/* Bottom Left - High Quality and Reliability */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                ВЫСОКОЕ КАЧЕСТВО И<br />
                НАДЕЖНОСТЬ
              </h3>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-sm leading-relaxed opacity-90">
                Высокое Качество Тренажеров - Это Визитная Карточка<br />
                TRUE. Кроме Того TRUE Предоставляет До 5 Лет Гарантии На<br />
                Кардиотренажеры.
              </p>
            </div>

            {/* Bottom Right - Quality and Operational Service */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
              <div
                className="h-80 bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('public/00_rec (1).png')`
                }}
              >
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-4">
                      КАЧЕСТВЕННЫЕ И<br />
                      ОПЕРАТИВНЫЙ СЕРВИС
                    </h3>
                    <div className="w-16 h-1 bg-yellow-400 mb-4"></div>
                    <p className="text-sm leading-relaxed opacity-90">
                      Обслуживание Нашего Оборудования Осуществляется Только<br />
                      Нашими Сервисными Инженерами. Оборот Запчастей С<br />
                      Запчастей И Высокий Уровень Технического<br />
                      Сервисного Сервиса
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content - Services */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-12">
                МЫ ПРЕДЛАГАЕМ<br />
                ПОЛНЫЙ КОМПЛЕКС УСЛУГ
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Consulting */}
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">

                  </div>
                  <h3 className="text-xl font-bold text-gray-800">КОНСАЛТИНГ</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Помощь в разработке<br />
                    концепции клуба,<br />
                    планировании оборудования и<br />
                    создании планов<br />
                    показателей.
                  </p>
                </div>

                {/* Installation & Service */}
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">

                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    МОНТАЖ И СЕРВИСНОЕ<br />
                    ОБСЛУЖИВАНИЕ
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Монтаж всех тренажеров,<br />
                    работа также сервисного<br />
                    обслуживания тренажеров.
                  </p>
                </div>

                {/* Layout & 3D Project */}
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">

                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    МАКЕТ ОБОРУДОВАНИЯ<br />
                    И 3D ПРОЕКТ
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Помогаем Клиентам Оборудование,<br />
                    сделать расстановку на плане и<br />
                    показать 3d визуализацию вашего<br />
                    будущего проекта.
                  </p>
                </div>

                {/* Showroom */}
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">

                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    ФИРМЕННЫЙ SHOW-ROOM
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Приходите чтобы лично<br />
                    познакомиться с нашим<br />
                    приобретением.
                  </p>
                </div>

                {/* Spare Parts */}
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">

                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    ПОСТАВКА ЗАПЧАСТЕЙ
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    поставки как гарантийных, так и<br />
                    постгарантийных запчастей.
                  </p>
                </div>

                {/* Delivery */}
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">

                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    ДОСТАВКА ПО ВСЕМУ<br />
                    УЗБЕКИСТАНУ
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    мы доставляем оборудование<br />
                    по всему узбекистану.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative">
                <img
                  src="public/run.png"
                  alt="TRUE FITNESS Equipment Service"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />

                {/* Blue accent overlay */}
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  654 x 420
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-1/2 -left-4 w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-100 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('public/Rectangle 28 (1).png')`
          }}
        >
          {/* City skyline simulation */}
          

          {/* Rooftop surface */}
          

          {/* People silhouettes */}
          
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-8 items-center">

            {/* Left side - Equipment Display */}
            <div className="hidden lg:flex flex-col items-center justify-center space-y-8">
              {/* Equipment Mockups */}
              <div className="relative">
                {/* Exercise Bike */}
                
               

                {/* Treadmill */}
                
               
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                  ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ<br />
                  ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ<br />
                  <span className="text-blue-600">TRUE FITNESS</span>
                </h1>
                <p className="text-gray-600 text-sm">
                  Мы берем на себя персонал оборудование вас и помощь с<br />
                  подбором оборудования
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                   
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                    placeholder="ИМЯ"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"

                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                    placeholder="EMAIL"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <span className="text-sm">🇺🇿</span>
                    <span className="text-gray-600 text-sm">+998</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"

                    className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                    placeholder="(99) 999-99-99"
                  />
                </div>

                <button
                  
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  ОТПРАВИТЬ
                </button>

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  Нажимая на кнопку, вы даете согласие на<br />
                  персональных данных и соглашаетесь с политикой<br />
                  конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Equipment Showcase */}
        
      </div>





      <Footer />
    </div>
  )
}

export default Home