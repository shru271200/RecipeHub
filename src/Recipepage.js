import React from 'react';
import './App.css';

const recipepage = (props) => {
  return (
    <div className='recipepage'>
        <div className="p1">
        <p>{props.recipe["recipe"]["label"]}</p>
        <img src={props.recipe["recipe"]["image"]} alt='title' 
        onClick={()=>window.open(props.recipe["recipe"]["url"])}/>
        </div>
       
    </div>
  )
}

export default recipepage