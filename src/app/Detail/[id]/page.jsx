"use client";
import { products } from "@/app/data/coffeeData/data";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [size, setSize] = useState("");
  const [sugar, setSugar] = useState("");

  const product = products.find((p) => p.id == id);

  const [quantity, setQuantity] = useState(0);

  const getPriceBySize = () => {
    if(size === "") return  0
    if(size === "Small") return product.price;
    if(size === "Medium") return product.price + 1;
    if(size === "Large") return product.price + 1.5;
  }

  const totalPrice = getPriceBySize() * quantity;

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 0));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(
        addToCart({
          ...product,
          size,
          sugar,
          quantity,
          price: getPriceBySize(),
        })
      );
    }
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 ">
      
        <div className="my-7 mx-5 p-4 flex flex-col items-center bg-white/5 backdrop-blur-xs rounded-xl border border-white/30">
        <img
          src={product.image}
          className="w-72 h-72 object-cover object-center rounded-full border border-white"
        />

        <h2 className="text-2xl mt-4 font-bold font-mono">{product.name}</h2>
        <p className="text-lg text-gray-300">${totalPrice.toFixed(2)}</p>

        {/* Quantity */}
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={handleDecrease}
            className="bg-black/50 hover:bg-black/20 p-2 rounded-full"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <span className="text-xl font-bold">{quantity}</span>

          <button
            onClick={handleIncrease}
            className="bg-white/30 hover:bg-white/50 p-2 text-white rounded-full"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        {/* Add to Cart */}
      </div>
      
      <div className="">
        <h2 className="text-2xl text-center font-mono font-extrabold text-stone-500 my-4 underline">
          Please Choose:
        </h2>
        <div className="mx-5 my-6 bg-white/20 backdrop-blur-md backdrop-brightness-125 border border-white/20 rounded-md ">
          <div className="my-4">
            <div className="flex justify-center gap-2 my-3">
              <h3 className="text-lg font-mono text-stone-400 font-extrabold text-center">
                Sugar Level:
              </h3>
              <img src="/images/sugar-cube.png" alt="sugar" className="w-7 h-7" />
            </div>
            <div className="flex gap-3 mt-2 justify-center">
              {["0%", "30%", "50%", "70%", "100%"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSugar(level)}
                  className={`px-2 md:px-5 py-1 rounded-lg border ${
                    sugar === level
                      ? "bg-gray-200/10 text-white font-mono font-extrabold border-0"
                      : "bg-gray-200/30 text-gray-800 border-0 font-mono font-extrabold"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div> <hr />
          <div className="my-4">
            <div className="flex justify-center gap-2 my-4">
              <h3 className="text-lg font-mono text-stone-400  font-extrabold text-center">
              Size:
            </h3>
            <img src="/images/glasses.png" alt="size" className="w-7 h-7"/>
            </div>
            <div className="flex justify-center gap-3 mt-2 font-mono font-extrabold">
              {["Small", "Medium", "Large"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 rounded-lg border ${
                    size === s
                      ? "bg-black text-white border-0"
                      : "bg-black/40 text-gray-100 border-0"  
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div><hr/>
          <div className="flex justify-center m-4">
            <button
              onClick={handleAddToCart}
              className="bg-stone-700 text-stone-300 hover:text-stone-950 font-mono font-bold px-5 py-1.5 rounded-lg mt-4 flex items-center gap-2 border border-black/40"
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
