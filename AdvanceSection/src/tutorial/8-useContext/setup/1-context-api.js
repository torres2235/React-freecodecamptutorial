import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    // Provider works as a distributor
    // needs to wrap our whole component tree/application
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API/ useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = (/* we dont need people here anymore if desired! */) => {
  // we can even use useContext to pass objects
  const mainData = useContext(PersonContext);

  // we can access 'people' through our useContext
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // now we can access the data using useContext w/o Prop Drilling!
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
