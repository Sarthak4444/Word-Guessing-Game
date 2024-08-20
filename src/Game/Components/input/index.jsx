// import { useState } from 'react';
import "./style.css";

function Input({ onInput = () => {}, value } = {}) {
  function handleInput(e) {
    onInput(e.target.value);
  }

  return (
    <span>
      <input
       
        className="uppercase bg-transparent border-b-8 focus:border-gray-500 focus:outline-none border-yellow-500 text-center font-semibold text-5xl text-[#faf0ca] font-sans w-16"
        maxLength={1}
        type="text"
        value={value}
        onInput={handleInput}
      />
    </span>
  );
}

export default Input;
