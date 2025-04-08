import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch"; // our custom hook!

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  // grab our deconstructed returns from our custom hook
  const { loading, products } = useFetch(url);

  console.log(products);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Example;
