import { useContext, createContext, useEffect } from "react";
import { useState } from "react";

import getCharacters from "../services/characters";
import getCharactersDetails from "../services/charactersDetails";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favoritesList, setFavoritesList] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [charactersDetails, setCharactersDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => setFavoritesList([]), []);

  const handleAddFavoritesList = (e) => {
    const elementId = e.target.id;
    const newList = [...favoritesList, elementId];
    setFavoritesList(newList);
  };

  useEffect(() => {
    getCharacters(setCharacters);
  }, []);

  useEffect(() => {
    const getAllCharDetails = async () => {
      Promise.all(
        characters.map(async (character) => {
          getCharactersDetails(character.uid, setCharactersDetails);
        })
      );
    };
    getAllCharDetails();
  }, [characters]);

  //USE EFFECT PARA CONTROLAR LOADING
  useEffect(() => {
    if (
      charactersDetails.length > 0 &&
      characters.length === charactersDetails.length
    ) {
      setLoading(false);
    }
  }, [characters, charactersDetails]);

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
    charactersDetails,
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
