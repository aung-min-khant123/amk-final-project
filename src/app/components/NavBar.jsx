"use client";
import {
  faBars,
  faCartShopping,
  faMugSaucer,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav
      className={`bg-gray-200/5 backdrop-blur-sm md:bg-white/10 border border-e-white/10 border-s-white/10
      rounded-md mx-2  md:backdrop-blur-xl shadow-lg sticky top-0 z-50 md:h-17 transition-all duration-300 
      ${isOpen ? "h-60" : "h-auto"} md:h-17`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold text-white/50 font-mono"
        >
          <div className="flex justify-center gap-3">
            <h1>LaMoon Coffee</h1>
            <img src="/images/coffee-cup.png" className="w-8 h-8" />
          </div>
        </Link>

        <div className="relative md:hidden">
          <Link href="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-2xl text-white/50"
            />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        <ul className="hidden md:flex space-x-8 text-white/50 font-serif text-xl items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li className="relative">
            <Link href="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                className=" text-white/50 "
              />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-white/50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/3 backdrop-blur-lg shadow-lg flex justify-center mx-2.5 my-2 rounded-xl">
          <ul className="flex flex-col space-y-3.5 py-3 px-5 text-gray-950 font-mono">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
