"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeItemCompletely } from "@/app/redux/cartSlice";
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

    
    setTimeout(() => {
      setCheckoutSuccess(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-center gap-5 my-4">
        <img src="/images/coffee.png" alt="cart" className="w-10 h-10 hover:size-14"  />
        <h1 className="text-amber-700 text-3xl font-bold mb-6 text-center">Your Cart</h1>
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
                  className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-lg mx-auto sm:mx-0"
                />
                <div className="text-center sm:text-left">
                  <p className="text-[16px] font-semibold">{item.name}</p>
                  <p className="text-gray-600 text-sm sm:text-base">
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
                  onClick={() =>
                    dispatch(addToCart({ id: item.id, ...item }))
                  }
                  className="bg-gray-500 hover:bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>

              
              <div className="text-center sm:text-right w-full sm:w-auto">
                <p className="text-gray-700 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              
              <button
                onClick={() => dispatch(removeItemCompletely(item.id))}
                className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1 justify-center"
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
                    : "bg-blue-600 hover:bg-blue-700"
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

