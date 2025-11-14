"use client";
import React from "react";
import { products } from "@/app/data/coffeeData/data";
import Product from "./Product";

function Products({ categoryName }) {
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="mt-4 grid grid-cols-1 gap-4 w-full justify-center">
      {categoryProducts.length > 0 ? (
        categoryProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p className="text-gray-500 text-center">No products available.</p>
      )}
    </div>
  );
}

export default Products;
