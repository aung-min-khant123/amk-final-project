// "use client";
// import React from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { useSelector } from "react-redux";

// export default function CartBadge() {
//   const { totalQuantity } = useSelector((state) => state.cart);

//   return (
//     <div className="relative flex items-center justify-center">
//       <Link href="/cart" className="relative block">
//         <FontAwesomeIcon
//           icon={faCartShopping}
//           className="text-2xl text-amber-700 md:text-3xl"
//         />
//         {totalQuantity > 0 && (
//           <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//             {totalQuantity}
//           </span>
//         )}
//       </Link>
//     </div>
//   );
// }
