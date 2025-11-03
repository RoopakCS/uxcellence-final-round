import React from "react";
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

        <nav className="absolute top-0 left-0 w-full flex justify-between items-center py-4 px-10 z-10 text-white">
          <div className="w-[10%]">
            <img src="Logo.png" alt="" className="h-16 w-auto" />
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
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-lg transition"
            >
              Dashboard
            </a>
          </div>
        </nav>
        <div className="flex items-center justify-center">
          <div className="text-white absolute top-48 flex w-[80%] text-center text-7xl font-bold">
            <h1>Create a Portfolio website that stands out</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingNav;
