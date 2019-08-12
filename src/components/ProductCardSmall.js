import React from 'react';

export default function ProductCardSmall(props){

return <div className = "box center full-height">
            <div className="column full-height">

              <figure className="image center" >
                <img src={props.beverage.imageURL}/>
              </figure>

              <div className="level" style={{marginBottom: '10px', marginTop: '7px'}}>  
                <p className="title is-6">{props.beverage.name}</p>
              </div>

              <div className="level">

                <div className="level-left">
                  <p className="is-6">{"$" + props.beverage.price}</p>
                  <div className="select is-small" style={{marginLeft:'6px'}}>
                    <select>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </div>

                <a className="level-right button is-text">
                  <span className="icon is-small">
                    <i className="fas fa-cart-plus"></i>
                  </span>
                </a>

              </div>

            </div>        
          </div>    
  
}