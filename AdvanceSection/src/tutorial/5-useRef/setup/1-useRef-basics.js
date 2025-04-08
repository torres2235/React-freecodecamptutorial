import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null); // holds the DOM we want to target
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value); // now we can access the values in that DOM element
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus(); // allows us to focus the input w/o clicking
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />{" "}
          {/* "ref={}" assigns our targeted DOM to our variable*/}
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefBasics;
