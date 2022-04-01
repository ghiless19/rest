import * as React from 'react'
import { restaurantPart, restaurantTitle, restaurantPhoto} from "../components/layout.module.css" 
import restaurant from "../images/restaurant2.png"
import Menu from '../components/menu';

const HomePage = () => {
  

  return(
    <div>
   
    <div className={restaurantPart} >
      <img src={restaurant} alt='restaurant' className={restaurantPhoto} />
      <div  className={restaurantTitle}>
        <h1>Welcome to MultiCuisine</h1>
      </div>
    </div>
  
      <h2>Menu List</h2>    
      <main>          
        <Menu ></Menu>
      </main>
    </div>
    )
};


  export default HomePage