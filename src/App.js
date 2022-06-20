
import { useState, useEffect } from "react";
import RandomResults from "./components/RandomResults";
import Header from "./components/Header";
import ListHeader from "./components/ListHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Favorites from "./components/Favorites";
import RemoveFavorites from "./components/RemoveFavorites";
// import DisplayFavorites from "./components/DisplayFavorites";
// import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchItem, setSearchItem] = useState('')

  const getImages = () => {
    const url = 'https://zoo-animal-api.herokuapp.com/animals/rand/5'
      fetch(url)
      .then((res) => res.json())
      .then((res) => setAnimals(res))
      .catch(console.error);
      
  }

  const resetRandomAnimals = () => {
    getImages()
  }

  useEffect(() => {
    getImages(searchItem)
    resetRandomAnimals()
  }, [searchItem]);
  
  console.log(animals)

  useEffect(() => {
      const favAnimals = JSON.parse(
        localStorage.getItem('react-zoo-animal-app-favorites')
      );

      if (favAnimals) {
        setFavorites(favAnimals)
      }
  }, []);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-zoo-animal-app-favorites', JSON.stringify(items));
  }

  const addFavAnimal = (animal) => {
    const newFavList = [...favorites, animal];
    setFavorites(newFavList);
    saveToLocalStorage(newFavList);
  };

  const removeFavAnimal = (animal) => {
    const newFavList = favorites.filter((favorite) => favorite.id !== animal.id);
    setFavorites(newFavList);
    saveToLocalStorage(newFavList);
  }



  if(!animals) {
    return(
      <>
      <h2>Loading...</h2>
      </>
    )
  }

  return (
    <div className='container-fluid main'> 
      <div className="header"> <Header /> </div>
        <div style={{backgroundColor: "#9198e5 ", border: 'blue solid 3px', margin: "auto", width: '200px', textAlign: "center", borderRadius: '10px', fontSize: '20px'}}>
          <button onClick={() => {
          resetRandomAnimals(animals)
          }}> Random Search 
        </button>
      </div>
        
      <div >
        <ListHeader heading='Animals'/>
      </div>
    
      <div className="row">
          <RandomResults  animals={animals} handleFavClick={addFavAnimal} favComponent={Favorites}/>
      </div>

      <br></br>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <ListHeader heading='Favorites'/>
      </div>
      <div className="row">
          <RandomResults  animals={favorites} handleFavClick={removeFavAnimal} favComponent={RemoveFavorites}/>
          {/* <Routes>
            <Route path='/favorites' element={<DisplayFavorites favorites={favorites}/>}/>
          </Routes> */}
      </div>
    </div>
  )
}

export default App;
