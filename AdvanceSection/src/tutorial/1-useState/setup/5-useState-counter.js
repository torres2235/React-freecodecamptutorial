import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  // doing reset by reference just for practice
  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1); does not work on multiple clicks as value doesn't update until after
      setValue((prevState) => {
        return prevState + 1; // in this case we are getting the old value, not just the current value
      });
    }, 2000); // '2000' for a 2sec timeout
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          decrease
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(reset);
          }}
        >
          reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
