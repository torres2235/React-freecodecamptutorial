import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `newMessages(${value})`;
    }

    // second parameter
    // empty list ([]) make useEffect only run on the intial render
    // adding a variable makes it only run when that variable is changed
  }, [value]); // in this case, when value inceases, run the useEffect

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
