import React from "react";
import Carousel from"./Carousel"
function Hero() {
  return (
    <>
      <div className="fixed h-[110vh] md:h-[94vh] text-white w-full">
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
        <div className="container mx-auto h-full flex flex-col md:justify-center z-30 relative">
          <div
            className="flex flex-col justify-center items-center bg-white/10 
             backdrop-blur-sm rounded-xl mx-4 my-4 border border-e-black/20 border-s-black/20"
          >
            <h1 className=" text-2xl md:text-5xl text-center font-mono text-black/60 my-1 md:my-4">
              <span className="text-stone-700 font-mono">Coffee</span>&Joy
            </h1>
            <p className="text-sm md:text-3xl font-mono my-2 md:my-5 text-black text-center">
              Experiance the joy of expectional coffee in our cozy space, where
              every cup is crafted with passion and warmth
            </p>
          </div>
          {/* <div className="container bg-black/10 backdrop-blur-md border-2 border-e-black/10 border-s-black/10 rounded-md">
            <div className="flex justify-center gap-3">
              <h1 className="text-xl font-mono text-stone-900 text-center my-4 font-bold">
                Best Sellers
              </h1>
              <img
                src="/images/best-seller.png"
                alt="best-seller"
                className="w-15 h-15"
              />
            </div>
            <div className="flex gap-5 md:gap-10 justify-center my-10">
              <img
                src="/images/capuucino.png"
                alt="coffee"
                className="w-15 h-15 md:w-50 md:h-50 rounded-md border border-white/20"
              />
              <img
                src="/images/mocha.png"
                alt="coffee"
                className="w-15 h-15 md:w-50 md:h-50  rounded-md border border-white/20"
              />
              <img
                src="/images/avocadosmoothie.png"
                alt="coffee"
                className="w-15 h-15 md:w-50 md:h-50 rounded-md border border-white/20"
              />
            </div>
          </div> */}
            <Carousel/>  
        </div>
      </div>
    </>
  );
}

export default Hero;
