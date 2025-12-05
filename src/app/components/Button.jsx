import React from "react";

function Button({ btnText, endIcon, onClick, isActive }) {
  return (
    <button
      className="px-3 py-2.5  bg-stone-900 hover:bg-stone-900/50 text-amber-700 
       rounded-2xl font-serif tracking-wide mt-2 text-xs before:absolute before:content-['']"
      onClick={onClick}
    >
      {btnText}
      {endIcon}
    </button>
  );
}

export default Button;
