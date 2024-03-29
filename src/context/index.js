import React, { createContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.min.css";

import { pokedex, GoJessy, TodoList } from "./mock";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [project, setProject] = useState(pokedex);
  const [count, setCount] = useState(1);
  const [url, setUrl] = useState();

  useEffect(() => {
    if (count === 1) {
      setProject(pokedex);
    } else if (count === 2) {
      setProject(GoJessy);
    } else if(count === 3) {
      setProject(TodoList);
    }
  }, [count]);

  return (
    <ProductContext.Provider
      value={{
        project,
        count,
        setCount,
        url,
        setUrl,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
