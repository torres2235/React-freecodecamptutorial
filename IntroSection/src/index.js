import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

// new imports
import { books } from "./books"; // '{ books }' must match the name of our list in ./books.js if using named export
import Book from "./Book"; // since this is a 'export default', we could change the name from 'Book' to something else if we wanted

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<BookList />);
