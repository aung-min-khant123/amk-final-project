// "use client";
// import React, { useState } from "react";
// import Button from "./Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowDown,
//   faBlender,
//   faCoffee,
//   faLeaf,
//   faBirthdayCake,
// } from "@fortawesome/free-solid-svg-icons";
// import Products from "./Products";

// function Category({ menu, isActive = false, onToggle }) {
//   const { id, image, name } = menu;

//   return (
//     <>
//     <div>
//       <div
//         key={id}
//         className="border border-amber-900 rounded-2xl overflow-hidden w-80 flex flex-col
//         items-center justify-start bg-white/70 p-4 mb-8"
//       >
//         <img
//           src={image}
//           alt={name}
//           className="w-50 h-40 object-cover border-2 border-black m-2 object-center rounded-2xl"
//         />

//         <h3 className="text-center mt-2 text-md font-serif text-gray-900">
//           {name}
//           {name.includes("Coffee") && (
//             <FontAwesomeIcon icon={faCoffee} className="ml-2" />
//           )}
//           {name.includes("Tea") && (
//             <FontAwesomeIcon icon={faLeaf} className="ml-2" />
//           )}
//           {name.includes("Smoothie") && (
//             <FontAwesomeIcon icon={faBlender} className="ml-2" />
//           )}
//           {name.includes("Cake") && (
//             <FontAwesomeIcon icon={faBirthdayCake} className="ml-2" />
//           )}
//         </h3>

//         <Button
//           btnText={isActive ? "Hide menu" : "View menu"}
//           endIcon={<FontAwesomeIcon icon={faArrowDown} />}
//           onClick={onToggle}
//         />
//       </div>
//       <div>
//         {isActive && <Products categoryName={name} />}
//       </div>
//     </div>

//     </>

//   );
// }

// export default Category;

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
      className="border border-amber-900 rounded-2xl w-80 flex flex-col items-center bg-white/70 p-4 mb-8"
    >
      <img src={image} className="w-50 h-50 object-cover object-center rounded-2xl" />

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
    {/* Mobile-only: show products under category */}
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