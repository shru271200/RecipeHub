import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './App.css';
import Recipepage from './Recipepage';

function App() {
  // eslint-disable-next-line no-use-before-define
  const [recipes,setRecipes]= useState([])
  const [query,setQuery] = useState("")
  const url=`https://api.edamam.com/search?q=${query}&app_id=9ba7a3ac&app_key=bc74f7255dbed7592fd1e592f7294fc5&from=0&to=10`
  
  const getRecipe = async() => {
    var result = await Axios.get(url)
    setRecipes(result.data.hits);
    console.log(result.data.hits)
  };
  const onSubmit =(e) =>{
    e.preventDefault();
    getRecipe();
  }
  return (
    <div className="App">
     <div className='heading'>
      FoodHub🍇
     </div>
     <form className="foodhub_form" onSubmit={onSubmit}>
      <input className='input1' placeholder='Search the dish...' 
      type='text'
       value={query} 
      onChange={(e)=>{setQuery(e.target.value)}}>
      </input>
      <button onClick={getRecipe}>Search</button>
     </form>
     <div>
      {recipes.map((recipe) => {
        return <Recipepage recipe={recipe}/>
      })}
     </div>
    </div>
  );
}

export default App;
