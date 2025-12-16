"use client";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-extrabold mb-4">Thank You!</h1>
      <p className="text-xl mb-2">Your order is being prepared.</p>
      <p className="text-lg text-gray-600">ETA: 10 minutes</p>
    </div>
  );
}

