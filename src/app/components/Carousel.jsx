"use client";
import React from "react";

// const handleAddToCart = () => {
//     if (quantity > 0) {
//       for (let i = 0; i < quantity; i++) {
//         dispatch(addToCart({ id, image, name, price }));
//       }
     
//       setQuantity(0);
//     }
//   };

export default function Carousel() {
  const bestSellers = [
    {
      id: 1,
      name: "Cappucciano",
      price: 4.99,
      image: "/images/capuucino.png",
    },
    {
      id: 2,
      name: "Mocha",
      price: 4.49,
      image: "/images/mocha.png",
    },
    {
      id: 3,
      name: "Cocoa Mint",
      price: 3.50,
      image: "/images/cocoamint.png",
    },
    {
      id: 4,
      name: "Avocado Smoothie",
      price: 5.25,
      image: "/images/avocadosmoothie.png",
    },
    {
      id: 5,
      name: "Afogato",
      price: 5.25,
      image: "/images/afogato.png",
    },
    {
      id: 6,
      name: "Caramel Macciato",
      price: 5.25,
      image: "/images/caramelmacciato.png",
    },
    {
      id: 7,
      name: "Blueberry Cheesecake",
      price: 5.25,
      image: "/images/blueberrycake.png",
    },
  ];

  return (
    <div className="w-full md:py-10 py-2">
      <div className="flex flex-row justify-center gap-3">
        <h2 className="text-3xl font-mono font-extrabold text-black/80 text-center mb-6">
        Best Sellers
      </h2>
       <img src="/images/best-seller.png" alt="best seller" className="w-12 h-12"/>
      </div>

      <div className="relative w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-4 snap-x snap-mandatory overflow-x-scroll pb-4">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="md:min-w-[250px] md:max-w-[250px]  min-w-[150px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md snap-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full md:h-40 h-20 object-contain mb-1 md:mb-3 rounded-xl"
              />

              <h3 className="font-semibold text-xs md:text-lg text-center">{item.name}</h3>
              <p className="text-amber-700 font-bold text-center">${item.price}</p>

              {/* <button className="w-full mt-3 py-2 bg-stone-600 hover:bg-stone-800 text-white text-xs md:text-xl rounded-xl font-medium transition-all">
                Order Now
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
