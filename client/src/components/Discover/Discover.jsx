import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import TelaiyaDamImage from "../../Images/Tilaiya_dam.jpeg";
import BrindahaWaterfall from "../../Images/Brindaha_img.png";
import backgroundImage from "../../Images/discover_img.jpg";
import RadhaKrishnaMandir from "../../Images/RadhaKrishnaMandir_img.jpg";
import WildlifeSanctuary from "../../Images/WildlifeSanctuary.jpg";
import PanchkheroDam from "../../Images/panchkheroDam.jpg";
import PetroWaterfall from "../../Images/PetroWaterfalls.jpeg";
import Footer from "../Footer/Footer";

const Discover = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow p-10 pt-20">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-wrap justify-center w-full">
            <Card
              username="Telaiya Dam"
              content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
              image={TelaiyaDamImage}
              link="/discover/TelaiyaDam"
            />
            <Card
              username="Vrindaha Waterfall"
              content="This is another piece of content for a different card."
              image={BrindahaWaterfall}
              link="/discover/VrindahaWaterfall"
            />
            <Card
              username="Radha Krishna Mandir"
              content="More content goes here for yet another card."
              image={RadhaKrishnaMandir}
              link="/discover/RadhaKrishnaMandir"
            />
          </div>

          <div className="flex flex-wrap justify-center w-full mt-4">
            <Card
              username="Petro Waterfall"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
              image={PetroWaterfall}
              link="/discover/PetroWaterfall"
            />
            <Card
              username="Maa Chanchala Devi Mandir"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
              image={PanchkheroDam}
              link="/discover/MaaChanchalaDeviMandir"
            />
            <Card
              username="Koderma Wildlife Sanctuary"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
              image={WildlifeSanctuary}
              link="/discover/KodermaWildlifeSanctuary"
            />
          </div>
        </div>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default Discover;
