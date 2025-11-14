import React from "react";

function Hero() {
  return (
    <>
      <div className="relative h-[94vh] text-white">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover bg-fixed"
        >
          <source
            src="https://www.pexels.com/download/video/2849950/"
            type="video/mp4"
            className="bg-amber-600"
          />
          Your browser does not support the video tag.
        </video>
        <div className="container mx-auto h-full flex flex-col xl-flex-row justify-center z-30 relative">
          <div className="flex flex-col justify-center items-center">
            <h1 className=" font-sans text-7xl md:text-8xl text-center font-extrabold" >
              <span className="text-[black] font-extrabold">Coffee</span>& Joy
            </h1>
            <p className="text-xl text-white font-extrabold">
              Experiance the joy of expectional coffee in our cozy space, where
              every cup is crafted with passion and warmth{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
