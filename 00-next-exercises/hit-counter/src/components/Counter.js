"use client";
import React, { useRef, useState } from "react";

function Counter({ num }) {
  const [censored, setCensored] = useState(false);

  const toggleClass = () => {
    setCensored(!censored);
  };

  return (
    <button className={censored ? "censored" : ""} onClick={toggleClass}>
      {num}
    </button>
  );
}

export default Counter;
