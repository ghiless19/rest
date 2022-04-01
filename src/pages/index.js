import * as React from 'react'
import {title} from "../components/layout.module.css" 
import restaurant from "../images/restaurant.png"
import Menu from '../components/menu';

const HomePage = () => {
  

  return(
    <div>
    <div  className={title}>
      <h1>Welcome to MultiCuisine</h1>
      <img src={restaurant} alt='restaurant'  />
    </div>
      <h1>Menu List</h1>    
      <main>          
        <Menu ></Menu>
      </main>
    </div>
    )
};


  export default HomePage