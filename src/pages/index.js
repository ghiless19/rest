import * as React from 'react'
import itemsList from '../components/itemList';
import {containerCard, header, card, container, photo} from "../components/layout.module.css" 
import restaurant from "./restaurant.png"

const HomePage = () => {
  return(
      <main>
        <div className={header}>
          <h1>Welcome to MultiCuisine</h1>
          <img src={restaurant} alt='restaurant'  />
            <h2>Menu List</h2>
        </div>
        <div className={container}>
          {itemsList.map(({id, name, price, path, desc}) => {
            return(
              <div className={card}>
                <h4 key={id}>
                <div>
                  <img src={path} alt={name}  className={photo}/>
                </div>
                <div className={containerCard}>
                  <h4>
                  <span>
                    Name:{name}
                  </span>
                  </h4>
                  <h4>
                    <span>
                      Price:{price}
                    </span>  
                  </h4>
                  <p>
                    <span>
                      Descption:{desc}
                    </span>
                  </p>
                </div>
                </h4>
              </div>
              )
            }
            )
            }
        </div>    
      </main>
    )
};


  export default HomePage