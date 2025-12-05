"use client";
import React, { useState } from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Link from "next/link";
import { products } from "@/app/data/coffeeData/data"; // ✅ import data

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

  // ✅ get best sellers from data.js
  const bestSellers = products.filter((p) =>
    [101, 103, 100, 106].includes(p.id)
  );

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity }));
    setQuantity(1);
  };

  return (
    <div className="slide-container">
      <div className="flex gap-3 justify-center mb-0 md:mb-4 mt-0 md:mt-5">
        <h1 className="font-serif font-extrabold text-black/90 text-2xl">
          Best Sellers
        </h1>
        <img src="/images/best-seller.png" alt="Best" className="w-10 h-10" />
      </div>

      <Zoom {...zoomOutProperties}>
        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="each-slide flex items-center justify-center flex-col w-full h-55 md:h-auto 
            bg-white/10 backdrop-blur-md border border-e-black/20 border-t-black/20 
            rounded-xl py-8"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-2/4 md:w-1/2 md:h-60 h-28 object-cover object-center mb-1 md:mb-3 
              rounded-3xl border border-white/20"
            />

            <h3 className="text-stone-100 shadow-lg shadow-white/50 rounded-md font-mono font-extrabold text-xs md:text-lg text-center mb-3">
              {item.name}
            </h3>

            <p className="text-stone-100 font-bold font-mono text-center">
              ${item.price}
            </p>

            <Link href={`/Detail/${item.id}`}>
              <Button btnText={"Detail"} />
            </Link>
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
