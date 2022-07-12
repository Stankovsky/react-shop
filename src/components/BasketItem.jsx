import React from 'react'

const BasketItem = (props) => {
  const {
    id,
    name,
    finalPrice,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
      <li className="collection-item">
        {name} <button
                  onClick={() => decQuantity(id)}
               >
                -
               </button> {quantity} шт {' '}
               <button
                  onClick={() => incQuantity(id)}
               >
                +
               </button> = {finalPrice * quantity} руб
        <span
            className="secondary-content"
            onClick={() => removeFromBasket(id)}
        >
            <i className="material-icons bascket-delete">clear</i>
        </span>
      </li>
  )
}

export  {BasketItem}