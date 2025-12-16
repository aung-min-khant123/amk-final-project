"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { clearCart } from "@/app/redux/cartSlice"
import { useDispatch } from "react-redux";

export default function PaymentPage() {
  const [payment, setPayment] = useState("");
  const router = useRouter();
const dispatch = useDispatch();

  const handlePay = () => {
    if (!payment) return alert("Please select a payment method");
    dispatch(clearCart());  
    router.push("/thank-you");
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
      <h1 className="text-2xl font-bold text-center mb-6 font-mono text-stone-300 underline">
        Select your Payment Method
      </h1>

      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-3 bg-white/20 p-4 rounded-lg cursor-pointer text-stone-800 font-bold font-mono">
          <input
            type="radio"
            name="payment"
            value="cash"
            onChange={(e) => setPayment(e.target.value)}
          />
          <img src="/images/money.png" alt="money" className="w-7 h-7" />
          Cash on Pickup
        </label>

        <label className="flex items-center gap-3 bg-white/20 p-4 rounded-lg cursor-pointer text-stone-800 font-bold font-mono">
          <input
            type="radio"
            name="payment"
            value="card"
            onChange={(e) => setPayment(e.target.value)}
          />
          <img src="/images/accepted.png" alt="money" className="w-7 h-7"/> Credit / Debit Card
        </label>

        <label className="flex items-center gap-3 bg-white/20 p-4 rounded-lg cursor-pointer text-stone-800 font-bold font-mono">
          <input
            type="radio"
            name="payment"
            value="wallet"
            onChange={(e) => setPayment(e.target.value)}
          />
          <img src="/images/mobile-banking.png" alt="money" className="w-7 h-7"/> E-Wallet
        </label>
      </div>

      <button
        onClick={handlePay}
        className="w-full mt-6 py-3 bg-stone-700 hover:bg-stone-800 text-white rounded-lg font-extrabold font-mono flex justify-center gap-3"
      >
        Pay & Place Order <img src="/images/online-order.png" alt="order" className="w-8 h-8"/>
      </button>
    </div>
  );
}
