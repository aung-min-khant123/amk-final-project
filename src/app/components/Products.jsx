// "use client";
// import React from "react";

// import Product from "./Product";

// import { useSelector } from "react-redux";

// function Products({ categoryName }) {
//    const products = useSelector((state) => state.products.list);

//   const showProducts = products.filter(
//     (p) => p.category.toLowerCase() === categoryName.toLowerCase()
//   );

//   return (
//     <div className="mt-4 grid gap-4 w-full justify-center">
//       {showProducts.length > 0 ? (
//         showProducts.map((product) => (
//           <Product key={product.id} product={product} />
//         ))
//       ) : (
//         <p className="text-gray-500 text-center">No products available.</p>
//       )}
//     </div>
//   );
// }

// export default Products;
"use client";
import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

function Products({ categoryName }) {
  const products = useSelector((state) => state.products.list);

  if (!categoryName) return null;

  const showProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-0 sm:grid-cols-2
     gap-10 w-full place-items-center ">
      {showProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
   
  );
}

export default Products;
