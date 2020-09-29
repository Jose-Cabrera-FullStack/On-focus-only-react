import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [object, setObject] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setObject(data));
  }, []);
  return object;
};

export default useInitialState;
