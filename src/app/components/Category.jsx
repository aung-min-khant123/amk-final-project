"use client";
import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBlender,
  faCoffee,
  faLeaf,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import Products from "./Products";

function Category({ menu }) {
  const [showProducts, setShowProducts] = useState(false);
  const { id, image, name } = menu;

  return (
    <div>
      <div
        key={id}
        className="border border-amber-900 rounded-2xl overflow-hidden w-80 flex flex-col 
        items-center justify-start bg-white/70 p-4 mb-8"
      >
        {/* Category Image */}
        <img
          src={image}
          alt={name}
          className="w-50 h-40 object-cover border-2 border-black m-2 object-center rounded-2xl"
        />

        {/* Category Title */}
        <h3 className="text-center mt-2 text-xs font-serif text-gray-900">
          {name}
          {name.toLowerCase().includes("coffee") && (
            <FontAwesomeIcon icon={faCoffee} className="ml-2" />
          )}
          {name.toLowerCase().includes("tea") && (
            <FontAwesomeIcon icon={faLeaf} className="ml-2" />
          )}
          {name.toLowerCase().includes("smoothie") && (
            <FontAwesomeIcon icon={faBlender} className="ml-2" />
          )}
          {name.toLowerCase().includes("cake") && (
            <FontAwesomeIcon icon={faBirthdayCake} className="ml-2" />
          )}
        </h3>

        
        <Button
          btnText={showProducts ? "Hide menu" : "View menu"}
          endIcon={<FontAwesomeIcon icon={faArrowDown} />}
          onClick={() => setShowProducts(!showProducts)}
        />

        
      </div>
      {showProducts && <Products categoryName={name} />}
    </div>
  );
}

export default Category;


