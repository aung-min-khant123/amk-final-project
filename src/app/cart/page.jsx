"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeItemCompletely,
} from "@/app/redux/cartSlice";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartPage() {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  // const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const router = useRouter();
  const handleCheckout = () => {
    router.push("/payment");
  };

  // const handleCheckout = () => {
  //   setCheckoutSuccess(true);

  //   alert("Checkout Successful!");
  //   setTimeout(() => {
  //     setCheckoutSuccess(false);
  //   }, 4000);
  // };

  return (
    <div
      className="container mx-auto my-5 px-4 py-8 w-85 xl:w-7xl md:w-full  bg-white/10 backdrop-blur-lg backdrop-opacity-40
       backdrop-brightness-95 rounded-2xl 
     border border-e-white/10 border-s-white/10"
    >
      <div className="flex justify-center gap-3 my-4">
        <h1 className="text-black/50 text-3xl font-extrabold font-sans mb-6 text-center">
          Your Cart:
        </h1>
        <img
          src="/images/ecommerce.png"
          alt="cart"
          className="w-7 h-7 hover:size-10"
        />
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col xl:flex-row md:items-center md:justify-between border-b pb-4 gap-5 md:gap-10"
            >
              <div className="md:flex items-center gap-4 sm:gap-8 w-full sm:w-auto md:max-w-40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 sm:w-20 sm:h-20 object-contain rounded-full mx-auto sm:mx-0"
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
                  onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className="flex gap-2 md:gap-3 flex-col my-2 font-mono font-bold text-stone-900 text-lg text-center">
                <p className="bg-white/10 p-2 rounded-md mx-6 md:mx-0 mt-2 md:mt-0 border border-white/20">
                  Size: {item.size}
                </p>
                <p className="bg-white/10 p-2 rounded-md mx-6 md:mx-0 border border-white/20">
                  Sugar: {item.sugar}
                </p>
                <p className="bg-white/10 p-2 rounded-md mx-6 md:mx-0 border border-white/20">
                  Place: {item.choice}
                </p>
                {item.temperature && (
                  <p className="bg-white/10 p-2 rounded-md mx-6 md:mx-0 border border-white/20">
                    Temperature: {item.temperature}
                  </p>
                )}
              </div>
              {/* <input
                type="text"
                placeholder="Add note..."
                className="border border-gray-300/20 bg-white/20 backdrop-blur-md text-white rounded-md px-3 py-1 text-sm 
              md:w-45 w-full focus:outline-none focus:ring-2 focus:ring-black/10 mt-2"
              /> */}

              <div className="text-center sm:text-right w-full sm:w-auto">
                <p className="text-white/70 font-extrabold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => dispatch(removeItemCompletely(item.id))}
                className="bg-white/60 p-2 mx-15 md:mx-0 rounded-md hover:rounded-xl text-black hover:text-stone-800 font-mono text-sm flex items-center gap-1 justify-center"
              >
                <FontAwesomeIcon icon={faTrash} />
                Remove
              </button>
            </div>
          ))}

          <div className="border-t pt-6 mt-6 text-right">
            <p className="text-lg text-stone-950 font-mono font-extrabold">
              <span className="font-semibold">Total Quantity:</span>{" "}
              {totalQuantity}
            </p>
            <p className="text-xl  text-stone-950 font-mono font-extrabold">
              Total Price: ${totalPrice.toFixed(2)}
            </p>

            {/* <button
              onClick={handleCheckout}
              className={`mt-5 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300
                ${
                  checkoutSuccess
                    ? "bg-green-600"
                    : "bg-stone-600 hover:bg-stone-700"
                }`}
            >
              {checkoutSuccess ? "Checkout Success" : "Proceed to Checkout"}
            </button> */}
            <button
              onClick={handleCheckout}
              className="mt-5 px-6 py-3 rounded-lg text-white font-semibold
            bg-stone-600 hover:bg-stone-700 transition-all"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
