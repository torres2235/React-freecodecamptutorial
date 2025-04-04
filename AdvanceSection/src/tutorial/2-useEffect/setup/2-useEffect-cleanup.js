import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = () => {
    // updates our current window width to 'size'
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    // when the window width changes ('resize'), we call checkSize
    window.addEventListener("resize", checkSize);
    console.log("render");

    // our cleanup code!
    // not always necessary to have
    return () => {
      console.log("cleanup");
      // we must remove the eventListner as we are creating one on every resize
      // otherwise, we could get a memory leak!!
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
