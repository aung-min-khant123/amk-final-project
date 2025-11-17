"use client";
import { faBars, faCartShopping, faMugSaucer, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-700">
          LaMoon coffee <FontAwesomeIcon icon={faMugSaucer} />
        </Link>

        <div className="relative md:hidden">
          <Link href="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-2xl text-amber-700"
            />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        <ul className="hidden md:flex space-x-8 text-amber-700 font-serif text-xl items-center">
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
                className=" text-amber-700 "
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
          className="md:hidden text-amber-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-stone-300/50 backdrop-blur-2xl shadow-lg flex justify-center mx-2.5 mb-3 rounded-xl">
          <ul className="flex flex-col space-y-2 py-3 px-5 text-white font-serif">
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
