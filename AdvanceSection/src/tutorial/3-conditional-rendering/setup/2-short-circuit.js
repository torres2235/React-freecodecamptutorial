import React, { useState } from "react";
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    // as we toggle the state, we can control when things get rendered
    <>
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {isError && <h1>ERROR FOUND</h1> /* short circuit example */}

      {
        /* ternary operator example */
        /* ifTrue ? do this : else do this */
        isError ? <h1>there is an error</h1> : <h2>there is no error</h2>
      }
    </>
  );
};

export default ShortCircuit;
