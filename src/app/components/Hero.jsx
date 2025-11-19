import React from "react";

function Hero() {
  return (
    <>
      <div className="fixed h-[94vh] text-white w-full">
        <video
          autoPlay
          loop
          playsInline
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
          <div
            className="flex flex-col justify-center items-center bg-white/10 
             backdrop-blur-sm rounded-xl mx-4 my-10 border border-e-black/20 border-s-black/20"
          >
            <h1 className=" text-4xl md:text-5xl text-center font-mono text-black/60 my-4">
              <span className="text-stone-700 font-mono">Coffee</span>&Joy
            </h1>
            <p className="text-md md:text-3xl font-mono my-5 text-black text-center">
              Experiance the joy of expectional coffee in our cozy space, where
              every cup is crafted with passion and warmth
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
