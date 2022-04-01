import * as React from 'react'

import itemsList from '../components/itemList';
import {containerCard, containerCardName, cardTop, containerCardPrice, card, container, photo} from "../components/layout.module.css" 
const Menu = () => {
    return (
        <div className={container}>
          
        {itemsList.map(({id, name, price, path, desc}) => {
            return(
              <div className={card}>
                <h4 key={id}>
                  <div >
                    <div className={cardTop}>
                      <img src={path} alt={name} className={photo} />
                    </div>
                    <div className={containerCard}>
                      <h4 className={containerCardName}>
                        <span>
                          {name}
                        </span>
                      </h4>
                      <h4  className={containerCardPrice}>
                        <span>
                          {price} $
                        </span>  
                      </h4>
                      <p>
                        <span>
                          {desc}
                        </span>
                      </p>
                    </div>
                  </div>  
                </h4>
              </div>

            )
           
            }
            )
          }
          </div>
    
    )
}
export default Menu