"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";
import Button from "./Button";

function Product({ product }) {
  const { id, image, name, price } = product;
  const dispatch = useDispatch();

  
  const [quantity, setQuantity] = useState(0);

  
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  
  const handleAddToCart = () => {
    if (quantity > 0) {
      for (let i = 0; i < quantity; i++) {
        dispatch(addToCart({ id, image, name, price }));
      }
     
      setQuantity(0);
    }
  };

  return (
    <div className="border-2 rounded-lg p-3 text-center shadow-sm w-55 h-95">
      
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-contain mb-2"
      />

      
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-gray-600">${price.toFixed(2)}</p>

      
      <div className="flex items-center justify-center gap-4 mt-3">
       
        <button
          onClick={handleDecrease}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>

       
        <span className="text-lg font-semibold w-6 text-center">{quantity}</span>

        
        <button
          onClick={handleIncrease}
          className="bg-gray-500 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      
      <div className="mt-3">
        <Button
          btnText={"Add to cart"}
          onClick={handleAddToCart}
          disabled={quantity === 0}
        />
      </div>
    </div>
  );
}

export default Product;

