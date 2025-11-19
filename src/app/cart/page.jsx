"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeItemCompletely,
} from "@/app/redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartPage() {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const handleCheckout = () => {
    setCheckoutSuccess(true);

    alert("Checkout Successful!");
    setTimeout(() => {
      setCheckoutSuccess(false);
    }, 4000);
  };

  return (
    <div
      className="container mx-auto my-5 px-4 py-8 max-w-6xl bg-white/5 backdrop-blur-xs backdrop-opacity-40 backdrop-brightness-95 rounded-2xl 
     border border-e-white/10 border-s-white/10"
    >
      <div className="flex justify-center gap-5 my-4">
        <img
          src="/images/coffee.png"
          alt="cart"
          className="w-10 h-10 hover:size-14"
        />
        <h1 className="text-amber-700 text-3xl font-bold mb-6 text-center">
          Your Cart
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 gap-4"
            >
              <div className="md:flex items-center gap-4 sm:gap-8 w-full sm:w-auto md:max-w-40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 sm:w-20 sm:h-20 object-contain rounded-lg mx-auto sm:mx-0"
                />
                <div className="text-center sm:text-left">
                  <p className="text-[16px] font-mono">{item.name}</p>
                  <p className="text-gray-900 text-sm sm:text-base">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>

                <span className="text-lg font-extrabold min-w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => dispatch(addToCart({ id: item.id, ...item }))}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <input
                type="text"
                placeholder="Add note..."
                className="border border-gray-300/20 bg-white/20 backdrop-blur-md text-white rounded-md px-3 py-1 text-sm 
              md:w-45 w-full focus:outline-none focus:ring-2 focus:ring-black/10 mt-2"
              />

              <div className="text-center sm:text-right w-full sm:w-auto">
                <p className="text-white/70 font-extrabold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => dispatch(removeItemCompletely(item.id))}
                className="text-red-800 hover:text-red-800 text-sm flex items-center gap-1 justify-center"
              >
                <FontAwesomeIcon icon={faTrash} />
                Remove
              </button>
            </div>
          ))}

          <div className="border-t pt-6 mt-6 text-right">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Total Quantity:</span>{" "}
              {totalQuantity}
            </p>
            <p className="text-xl font-bold text-amber-700">
              Total Price: ${totalPrice.toFixed(2)}
            </p>

            <button
              onClick={handleCheckout}
              className={`mt-5 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300
                ${
                  checkoutSuccess
                    ? "bg-green-600"
                    : "bg-stone-600 hover:bg-stone-700"
                }`}
            >
              {checkoutSuccess ? "Checkout Success" : "Proceed to Checkout"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
