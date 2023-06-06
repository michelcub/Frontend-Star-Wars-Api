import { useContext, createContext, useEffect } from "react";
import { useState } from "react";
const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const listTest = [{id:1,name:'jose'},{id:2,name:'jack'},{id:3,name:'jordan'}, {id:4,name:'michel'}];
  const [favoritesList, setFavoritesList] = useState([]);
  useEffect(()=> setFavoritesList([...listTest]), [])
  const handleAddFavoritesList = (e) => {
    const elementId = e.target.id
    const newList = [...favoritesList, elementId];
    setFavoritesList(newList);
  }

  const handleDeleteFavorites = (e) => {
    const elementId = e.target.id;
    const newList = favoritesList.filter(item => item.id != parseInt(elementId))
    setFavoritesList([...newList]);
  }

  const actions = {
    handleDeleteFavorites,
    handleAddFavoritesList
  }

  const store = {
    favoritesList
  }

  return <AppContext.Provider value={{actions, store}}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
