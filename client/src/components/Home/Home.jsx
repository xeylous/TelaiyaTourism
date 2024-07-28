import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../Images/Home_img.jpg";

const Home = () => {
  return (
    <div>
      <style>
        {`
          body {
            background-image: url(${backgroundImage});
            background-size: 100%;
            background-position: center;
            height: 100vh;
            margin: 0;
          }
          .telaiya-heading {
            font-family: 'Montserrat', sans-serif;
            font-size: 5rem;
            color: white;
            position: absolute;
            top: 35%;
            left: 10%;
          }
        `}
      </style>

      <div className="relative h-screen">
        <div className="absolute top-8 left-5 font-bold text-2xl text-black">
          Telaiya Tourism
        </div>
        <div className="absolute top-10 left-56 font-normal text-black">
          <Link to="/discover">Discover</Link>
        </div>
        <div className="absolute top-10 left-72 px-3">
          <ul className="flex space-x-5 text-black font-xl">
            <Link to="/about" className="">
              About Us
            </Link>
            <Link to="/contact" className="font-normal">
              Contact Us
            </Link>
          </ul>
        </div>
        <Link to="/book">
          <button className="absolute top-8 right-16 bg-blue-500 p-2 px-5 rounded-xl text-white font-semibold hover:bg-blue-600">
            Book a Trip
          </button>
        </Link>
      </div>
      <h1 className="telaiya-heading">Telaiya Tourism</h1>
    </div>
  );
};

export default Home;
