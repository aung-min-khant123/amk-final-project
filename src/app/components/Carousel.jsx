// ...existing code...
"use client";
import React, { useState } from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const bestSellers = [
  {
    
    id: 101,
    name: "Cappuccino",
    image: "/images/capuucino.png",
    price: 4.5,
    category: "Coffee",
    
  },
  {
   id: 103,
    name: "Espresso",
    image: "/images/espresso1.png",
    price: 3.2,
    category: "Coffee",
  },
  {
    id: 100,
    name: "Afogato",
    image: "/images/afogato.png",
    price: 5,
    category: "Coffee",
  },
  {
    id: 106,
    name: "Tiramisu Latte",
    image: "/images/tiramisu.png",
    price: 5.5,
    category: "Coffee"
  },
];
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  // dispatch a single addToCart with the item payload; quantity handled by cart reducer
  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity }));
    setQuantity(1);
  };
  return (
    <div className="slide-container">
      <div className="flex gap-3 justify-center mb-0 md:mb-4">
        <h1 className="font-serif font-extrabold text-black/90 text-2xl">
          Best Sellers
        </h1>
        <img src="/images/best-seller.png" alt="Best" className="w-11 h-11" />
      </div>
      <Zoom
        {...zoomOutProperties}
        prevArrow={<button className="custom-arrow prev">‹</button>}
        nextArrow={<button className="custom-arrow next">›</button>}
      >
        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="each-slide flex items-center justify-center flex-col w-full h-55 md:h-auto  bg-white/10
             backdrop-blur-md border border-e-black/20 border-t-black/20 rounded-xl py-8 "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-2/4 md:w-1/2 md:h-60 h-28 object-cover object-center mb-1 md:mb-3 rounded-4xl border border-black/30 "
            />
            <h3 className="font-semibold text-xs md:text-lg text-center">
              {item.name}
            </h3>
            <p className="text-amber-700 font-bold text-center">
              ${item.price}
            </p>
            <Button
              btnText={"Add to cart"}
              endIcon={<FontAwesomeIcon icon={faCartShopping} />}
              onClick={() => handleAddToCart(item)}
            />
           
          </div>
        ))}
      </Zoom>
    </div>
  );
};

function Carousel() {
  return (
    <div className="flex justify-center">
      <div className="w-87 md:w-2xl">
        <Slideshow />
      </div>
    </div>
  );
}

export default Carousel;
