import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71OZY035QKL._SL1500_.jpg"
    alt="The Little Prince"
    style={{ width: 400 }}
  />
);

const Title = () => <h1>The Little Prince</h1>;

const Author = () => <h4>Antoine de Saint-Exupéry</h4>;

const root = createRoot(document.getElementById("root"));
root.render(<BookList />);
