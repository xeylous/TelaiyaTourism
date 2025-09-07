import backgroundImage from "../../Images/Home_img.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Home = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow relative">
        <h1 className="telaiya-heading absolute top-1/2 left-2 md:left-10  font-montserrat text-5xl md:text-7xl text-white" style={{ fontFamily: "Delius" }}>
          Telaiya Tourism
        </h1>
      </main>

      {/* Footer sticks to bottom */}
      <Footer />
    </div>
  );
};

export default Home;
