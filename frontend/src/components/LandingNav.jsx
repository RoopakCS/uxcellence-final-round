import React from "react";
import { Link } from "react-router-dom";
import LightRays from "./ui/LightRays";

function LandingNav() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />

        <nav className="absolute top-0 left-0 w-full flex justify-between items-center py-10 px-10 z-10 text-white">
          <div className="w-[10%]">
            <img src="Logo.png" alt="" className="w-auto" />
          </div>

          <div className="flex justify-center items-center gap-10 font-semibold">
            <a href="#" className="hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Contact Us
            </a>
          </div>

          <div>
            <a
              href="#"
              className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-5 py-2 rounded-lg transition"
            >
              Dashboard
            </a>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center top-48 absolute ">
          <div className="text-white flex w-[80%] text-center text-7xl font-bold">
            <h1 className="pl-16">Create a Portfolio website that stands out</h1>
          </div>
          <div className="text-white mt-10 text-center flex w-[100%] justify-center items-center text-lg font-bold">
            <h2 className="w-[50%] text-center pl-16">
              Showcase your work and attract clients. Build and promote your
              online portfolio using powerful AI, design and business tools
            </h2>
          </div>
          <div className="pt-16 pl-3">
            <Link
              to="/form"
              className="bg-cyan-500 rounded-xl hover:bg-cyan-400 font-bold px-10 py-4 text-white transition w-full text-2xl"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full mt-12 flex items-center px-40 justify-center tracking-wider">
            <div className="text-5xl font-bold">Start Now!</div>
            {/* <div>
              <button className="bg-cyan-500 p-4 text-black rounded-xl font-bold">
                About US
              </button>
            </div> */}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default LandingNav;
