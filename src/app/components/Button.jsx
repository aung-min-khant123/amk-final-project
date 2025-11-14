import React from "react";

function Button({ btnText, endIcon, onClick }) {
  return (
    <button
      className="px-2 py-2 bg-stone-800 text-white rounded-md  font-semibold tracking-wide mt-1.5 text-xs"
      onClick = {onClick}
    >
      {btnText}
      {endIcon}
      
    </button>
  );
}

export default Button;
