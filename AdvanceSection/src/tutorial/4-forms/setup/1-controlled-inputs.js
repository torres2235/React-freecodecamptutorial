import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      // check if variables are non-empty

      //const person = {firstName:firstName, email:email}
      const person = { id: new Date().getTime().toString(), firstName, email }; // short hand of above IF keyname matches varible name
      // using Date to create our unique id

      setPeople((people) => {
        // add person to our people list
        return [...people, person];
      });

      // return our form to empty string
      setFirstName("");
      setEmail("");

      console.log("person added to list");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn" type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>

        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
