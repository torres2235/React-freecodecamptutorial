import React from "react";
import PropTypes from "prop-types";

import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  // let's try another way for default props/values

  // if we have an image and it has a url
  const url = image && image.url;

  return (
    <article className="product">
      {/* if we dont have a url, use our default .jpeg */}
      <img src={url || defaultImage} alt={name} />
      <h4>{name || "default name"}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
