import { createContext, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  console.log(data);

  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
