import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // how to get useState if we did not want to import above
  const [people, setPeople] = React.useState(data); // import our data

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    // <></> is quick syntax for a React.Fragment
    <>
      {people.map((person) => {
        // map our data
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>delete</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
