import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");

  //condensing the above states into one object with multiple attributes
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name; // get the name of the target (ex. name="firstName")
    const value = e.target.value;
    setPerson({ ...person, [name]: value }); // now we can set each value to its correct property
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({
        firstName: "",
        email: "",
        age: "",
      });
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName" // needed so our handleChange function knows what our target is
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="email"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>

          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
