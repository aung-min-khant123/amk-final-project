
"use client";
import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCoffee,
  faLeaf,
  faBlender,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import Products from "./Products";

function Category({ menu, isActive, onToggle }) {
  const { id, image, name } = menu;

  return (
    <>
      <div
        key={id}
        className="border border-black/20 rounded-2xl w-80 flex flex-col items-center bg-white/20 
        backdrop-blur-lg p-4 mb-8"
      >
        <img
          src={image}
          className="w-50 h-50 object-cover object-center rounded-2xl bg-blend-color-dodge" loading="lazy"
        />

        <h3 className="text-center mt-2 font-serif text-gray-900">
          {name}
          {name.includes("Coffee") && ( 
            <FontAwesomeIcon icon={faCoffee} className="ml-2" />
          )}
          {name.includes("Tea") && (
            <FontAwesomeIcon icon={faLeaf} className="ml-2" />
          )}
          {name.includes("Smoothie") && (
            <FontAwesomeIcon icon={faBlender} className="ml-2" />
          )}
          {name.includes("Cake") && (
            <FontAwesomeIcon icon={faBirthdayCake} className="ml-2" />
          )}
        </h3>

        <Button
          btnText={isActive ? "This is the selected category" : "View menu"}
          endIcon={<FontAwesomeIcon icon={faArrowDown} />}
          onClick={onToggle}
        />
      </div>
      <div className="w-full md:hidden mt-2">
        {isActive && <Products categoryName={name} />}
      </div>
    </>
  );
}

export default Category;

// "&::before":{
//             content:"''",
//             display: isActive? "block" : "none",
//             border: "25px solid transparent",
//             borderTopColor: isActive ? "#1976d2" : "light",
//             position:"absolute",
//             bottom: "-2.6rem",
//             left: "35%",
