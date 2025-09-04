import Navbar from '../Navbar/Navbar';
import backgroundImage from '../../Images/AboutUs.jpg';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <>
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
      <div className="pt-32 px-4 text-center text-white">
        <p className="max-w-2xl mx-auto text-xl">
          Telaiya Tourism is dedicated to showcasing the beauty and cultural heritage of the Telaiya region. Our mission is to provide unforgettable experiences to our visitors through well-curated trips and tours.
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Our team consists of experienced guides and travel experts who are passionate about making your stay memorable. From the picturesque Telaiya Dam to the rich history of the area, we cover it all with personalized service and attention to detail.
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Join us on a journey to explore the natural wonders and historical sites of Telaiya. We are here to ensure you have an enriching and enjoyable experience.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AboutUs;
