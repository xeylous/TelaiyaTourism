import Navbar from '../Navbar/Navbar';
import TelaiyaDamImage from '../../Images/telaiyabg.jpg';
import TelaiyaDamImage1 from '../../Images/Tilaiya_dam1.jpg';
import TelaiyaDamImage2 from '../../Images/Tilaiya_dam2.jpg';
import TelaiyaDamImage3 from '../../Images/Tilaiya_dam3.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const TelaiyaDam = () => {
  return (
    <div className="relative">
      <Navbar />
      <div
        className="grid grid-cols-1 md:grid-cols-2 h-auto min-h-screen p-5 md:p-10 bg-cover bg-center pt-28 md:pt-40"
        style={{
          backgroundImage: `url(${TelaiyaDamImage})`,
        }}
      >
        {/* Swiper Section (on small screens first, on large screens second) */}
        <div className="order-1 md:order-2 flex flex-col justify-center items-center mt-0 md:mt-0 bg-gray-800 bg-opacity-60 p-4 md:p-6 rounded-lg shadow-lg w-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
          >
            <SwiperSlide>
              <img
                src={TelaiyaDamImage1}
                alt="Telaiya Dam 1"
                className="rounded-lg w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={TelaiyaDamImage2}
                alt="Telaiya Dam 2"
                className="rounded-lg w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={TelaiyaDamImage3}
                alt="Telaiya Dam 3"
                className="rounded-lg w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Description + Map Section */}
        <div className="order-2 md:order-1 flex flex-col justify-center text-left text-white bg-black bg-opacity-50 p-6 rounded-lg md:mr-5">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Telaiya Dam</h1>
          <p className="text-base md:text-lg mb-6">
            Telaiya Dam is one of the most picturesque spots in the region. Known
            for its scenic beauty and serene environment, it is a perfect getaway
            for nature lovers and those seeking a peaceful retreat. The dam is not
            only an important source of water but also a hub for various recreational
            activities.
          </p>

          {/* Google Map inside description */}
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg mb-4">
            <iframe
              title="Telaiya Dam Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.5323124143047!2d85.52970817466471!3d24.46362296082801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2fdcd6ec4d3e3%3A0x1cbcc8a8a3487f6f!2sTelaiya%20Dam!5e0!3m2!1sen!2sin!4v1694514923456!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Directions Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Telaiya+Dam"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelaiyaDam;
