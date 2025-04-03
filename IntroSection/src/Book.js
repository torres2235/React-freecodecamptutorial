// export default syntax
import React from "react";

const Book = (props) => {
  const { img, title, author } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("this click is by reference");
  };

  const complexExample = (author) => {
    alert(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" style={{ width: 400 }} />
      <h1>{title}</h1>
      <h4>{author}</h4>

      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => alert("this click is inline")}>
        Inline Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

// you can only have one 'export default' per file
export default Book;
