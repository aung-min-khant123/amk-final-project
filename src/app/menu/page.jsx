// "use client"
// import React from "react";
// import Categories from "@/app/components/Categories";
// import Products from "../components/Products";

// function Page() {
//   return (
//     <>
//       <div className="">
//         <Categories />
//       </div>
//     </>
//   );
// }

// export default Page;

"use client";
import React, { useState } from "react";
import Categories from "@/app/components/Categories";
import Products from "@/app/components/Products";

function Page() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <div className="hidden md:block">
        <Products categoryName={activeCategory} />
      </div>
    </>
  );
}

export default Page;
