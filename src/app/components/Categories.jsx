// "use client";
// import React, { useState } from "react";
// import Category from "./Category";
// import { MenuCategories } from "@/app/data/coffeeData/data";

// function Categories() {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const handleToggle = (name) => {
//     setActiveCategory(activeCategory === name ? null : name);
//   };
//   return (
//     <>
//       <div className=" flex flex-wrap justify-center mt-10 gap-10 ">
//         {MenuCategories.map((menu) => (
//           <Category
//             key={menu.id}
//             menu={menu}
//             isActive={activeCategory === menu.name}
//             onToggle={() => handleToggle(menu.name)}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Categories;

"use client";
import React from "react";
import { MenuCategories } from "@/app/data/coffeeData/data";
import Category from "./Category";

function Categories({ activeCategory, setActiveCategory }) {
  const handleToggle = (name) => {
    setActiveCategory(activeCategory === name ? null : name);
  };

  return (
    <div className="flex flex-wrap justify-center mt-10 gap-10">
      {MenuCategories.map((menu) => (
        <Category
          key={menu.id}
          menu={menu}
          isActive={activeCategory === menu.name}
          onToggle={() => handleToggle(menu.name)}
        />
      ))}
    </div>
  );
}

export default Categories;
