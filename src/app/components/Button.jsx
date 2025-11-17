import React from "react";

function Button({ btnText, endIcon, onClick }) {
  return (
    <button
      className="px-3 py-2.5  bg-stone-900 hover:bg-stone-900/50 text-amber-700 rounded-2xl font-serif tracking-wide mt-3 text-xs"
      onClick={onClick}
    >
      {btnText}
      {endIcon}
    </button>
  );
}

export default Button;
