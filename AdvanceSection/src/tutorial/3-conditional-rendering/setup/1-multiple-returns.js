import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  //NOTE: 'is', by convention, is usually used in boolean states
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false); // make sure to set to false
          setIsError(true); // fetching failed, throw error
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login); // get our user
        setIsLoading(false); // set loading to false once we have the user
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>ERROR</h1>
      </div>
    );
  }

  // default case
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
