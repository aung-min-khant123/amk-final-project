"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";
import Button from "./Button";
import Link from "next/link";
import { products } from "../data/coffeeData/data";

function Product({ product }) {
  const { id, image, name, price } = product;   
  
  return (
    <div
      className="border border-e-white/30 border-s-white/30 rounded-lg p-3 text-center 
    shadow-lg w-80 h-95
     bg-white/50 backdrop-blur-sm backdrop-brightness-110 backdrop-contrast-100 dark:bg-neutral-600/20"
    >
      <img
        src={image}
        alt={name}
        className="min-w-full h-60 object-cover my-2 rounded-xl shadow-2xl"
      />
      <p className="text-lg font-mono font-extrabold text-stone-200 shadow-lg shadow-white/30 mx-5 rounded-xl mb-2">{name}</p>
      <p className="text-white/50 font-bold font-mono">${price.toFixed(2)}</p>

      <Link href={`/Detail/${product?.id}`}>
        <Button btnText={"Detail"}></Button>
      </Link>         
      
    </div>
  );
}

export default Product;
