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
import React, { useEffect, useState } from "react";
import Categories from "@/app/components/Categories";
import Products from "@/app/components/Products";
import LoadingPage from "../components/LoadingPage";

function Page() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div>
          <Categories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <div className="hidden md:block">
            <Products categoryName={activeCategory} />
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
