import React from 'react';
import Navbar from '../Navbar/Navbar';
import TelaiyaDamImage from '../../Images/telaiyabg.jpg';
import TelaiyaDamImage1 from '../../Images/Tilaiya_dam1.jpg';
import TelaiyaDamImage2 from '../../Images/Tilaiya_dam2.jpg';
import TelaiyaDamImage3 from '../../Images/Tilaiya_dam3.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const PetroWaterfall = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen p-10 bg-cover" style={{ backgroundImage: `url(${TelaiyaDamImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <style>
          {`
            body {
              background-image: url(${TelaiyaDamImage});
              background-size: cover;
              background-position: center;
              

              margin: 0;
            }
          `}
        </style>
        <div className="flex flex-col justify-center text-left text-white bg-opacity-50 p-10">
          <h1 className="text-5xl font-bold mb-6">Petro Waterfall</h1>
          <p className="text-lg">
            Telaiya Dam is one of the most picturesque spots in the region. Known for its scenic beauty and serene environment, it is a perfect getaway for nature lovers and those seeking a peaceful retreat. The dam is not only an important source of water but also a hub for various recreational activities.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center absolute right-40 top-20 bg-gray-700 bg-opacity-50 p-5 rounded-lg shadow-lg" style={{ width: '100%', maxWidth: '600px', height: '600px' }}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            style={{ height: '700px', width: '100%'  }}
          >
            <SwiperSlide>
              <img src={TelaiyaDamImage1} alt="Telaiya Dam 1" className="rounded-lg w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={TelaiyaDamImage2} alt="Telaiya Dam 2" className="rounded-lg w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={TelaiyaDamImage3} alt="Telaiya Dam 3" className="rounded-lg w-full h-full object-cover" />
            </SwiperSlide>
            {/* Add more slides as needed */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PetroWaterfall;
