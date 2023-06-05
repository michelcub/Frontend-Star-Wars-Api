import { useState } from 'react';

import './App.css';
import { Navbar } from './components/Navbar';
const listTest = [{id:1,name:'jose'},{id:2,name:'jack'},{id:3,name:'jordan'}, {id:4,name:'michel'}];
function App() {
  const [favoritesList, setFavoritesList] = useState([...listTest])
  

  const handleDeleteFavorites = (e) => {
    const elementId = e.target.id;
    const newList = favoritesList.filter(item => item.id != parseInt(elementId))
    setFavoritesList([...newList])
  }


  return (
    <>
    <Navbar items={favoritesList} handle={handleDeleteFavorites}/>
      <h1>Hola</h1>
    </>
  )
}

export default App
