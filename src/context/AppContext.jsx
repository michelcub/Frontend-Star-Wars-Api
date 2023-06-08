import { useContext, createContext, useEffect } from "react";
import { useState } from "react";

import getCharacters from "../services/characters";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favoritesList, setFavoritesList] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => setFavoritesList([]), []);

  const handleAddFavoritesList = (e) => {
    const elementId = e.target.id;
    const newList = [...favoritesList, elementId];
    setFavoritesList(newList);
  };

  useEffect(() => {
    getCharacters(setCharacters);
    setLoading(false);
  }, []);
  
  const handleDeleteFavorites = (e) => {
    const elementId = e.target.id;
    const newList = favoritesList.filter(
      (item) => item.id != parseInt(elementId)
    );
    setFavoritesList([...newList]);
  };

  const actions = {
    handleDeleteFavorites,
    handleAddFavoritesList,
  };

  const store = {
    favoritesList,
    characters,
    loading,
  };

  return (
    <AppContext.Provider value={{ actions, store }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
