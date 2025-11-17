"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-[#2f2e2d7e] text-gray-800">
      {/* Hero Section */}
      <section className="bg-[url('/coffee-hero.jpg')] bg-cover bg-center bg-no-repeat h-[50vh] flex items-center justify-center">
        <div className="backdrop-blur-sm bg-black p-8 rounded-xl flex gap-4 ">
          <h1 className="text-xl md:text-5xl font-serif text-amber-700 tracking-wide">
            About Our Coffee Shop
          </h1>
          <img src="/images/about.png" alt="about" className="w-11 h-11 md:w-15 md:h-15"/>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto px-6 py-16 bg-amber-100 rounded-2xl">
        <div className="flex justify-center gap-4">
          <h2 className="text-3xl font-bold text-amber-700 text-center mb-6">
          Our Story
         </h2>
         <img src="/images/storyboard.png" alt="story" className="w-11 h-11"/>
        </div>

        <p className="text-lg text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Founded with passion and love for handcrafted beverages, our coffee shop
          has been serving the community with freshly brewed coffee, artisanal
          pastries, and a warm atmosphere.  
          We believe in sourcing the finest beans, supporting local farmers, and
          creating a space where great conversations begin with a cup of coffee.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-10 place-items-center">
          <img
            src="/images/lamoon.jpg"
            alt="Coffee Story"
            className="rounded-2xl shadow-lg w-full max-w-md hover:scale-80"
          />

          <p className="text-lg text-gray-700 leading-relaxed">
            From early mornings to late evenings, our baristas carefully craft
            every drink to perfection.  
            We take pride in our high-quality espresso, signature drinks, and
            cozy ambiance that keeps customers coming back every day.
          </p>
        </div>
      </section>

      
      <section className="bg-amber-100 py-16 mt-8">
        <div className="flex justify-center gap-4">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-10">
          Our Achievements
        </h2>
        <img src="images/achivements.png" alt="achieve" className="w-11 h-11"/>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-amber-700">10K+</h3>
            <p className="text-gray-600">Cups Served</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-amber-700">8</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-amber-700">3000+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-amber-700">16+</h3>
            <p className="text-gray-600">Menu Items</p>
          </div>
        </div>
      </section>

     
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-amber-100 p-10 rounded-2xl shadow-xl">
          <div className="flex justify-center gap-4">
            <h2 className="text-3xl font-bold text-amber-800 text-center mb-6">
            Our Mission
          </h2>
          <img src="/images/mountain.png" alt="mission" className="w-11 h-11"/>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed text-center">
            To bring exceptional coffee, comfort, and community together under
            one roof.  
            We aim to be a place where everyone feels welcome — a warm escape
            from the everyday.
          </p>
        </div>
      </section>

      
      <footer className="bg-amber-800 text-black text-center py-6">
        <p>&copy; {new Date().getFullYear()} CoffeeShop. All rights reserved.</p>
      </footer>
    </div>
  );
}
