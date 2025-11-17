"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-950 py-12 px-6">
      <div className="max-w-5xl mx-auto">

        
        <div className="flex justify-center mb-4 gap-3.5">
          <h1 className="text-4xl font-mono text-center text-amber-800 mb-6">
          Contact to LaMoon Coffee 
         </h1>
         <img src="/images/coffee-cup.png" className="w-15 h-13"/>
        </div>

        <p className="text-center text-gray-1 max-w-2xl mx-auto mb-10">
          We’d love to hear from you! Whether you have questions, feedback, or just want to say hello,
          feel free to reach out. Our team is always happy to assist.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          
          <div className="bg-stone-800 p-6 rounded-xl shadow-md text-center">
            <FontAwesomeIcon icon={faPhone} className="text-amber-700 text-3xl mb-3" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-100 mt-2">+66 (234) 567-890</p>
          </div>

          
          <div className="bg-stone-800 p-6 rounded-xl shadow-md text-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-amber-700 text-3xl mb-3" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-100 mt-2">contact@lamooncoffee.com</p>
          </div>

          
          <div className="bg-stone-800 p-6 rounded-xl shadow-md text-center">
            <FontAwesomeIcon icon={faLocationDot} className="text-amber-700 text-3xl mb-3" />
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-100 mt-2">
              Thaphae road, Chiang Mai, Thailand
            </p>
          </div>

        </div>

        
        <div className="bg-stone-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">Send us a Message</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col">
              <label className="font-medium">Your Name</label>
              <input
                type="text"
                className="mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                placeholder="Enter your name"
              />
            </div>

            
            <div className="flex flex-col">
              <label className="font-medium">Your Email</label>
              <input
                type="email"
                className="mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                placeholder="Enter your email"
              />
            </div>

            
            <div className="flex flex-col md:col-span-2">
              <label className="font-medium">Message</label>
              <textarea
                rows="4"
                className="mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold text-lg hover:bg-amber-800 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
