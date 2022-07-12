import React from 'react'
import {BasketItem} from './BasketItem'

const BasketList = (props) => {
    const {order = [],
           handleBascketShow = Function.prototype,
           removeFromBasket = Function.prototype,
           incQuantity = Function.prototype,
           decQuantity = Function.prototype,
          }= props;

const totalPrice = order.reduce((sum, el) => {
  return sum + el.finalPrice * el.quantity
}, 0);

  return (
    <ul className="collection basket-list">
        <li className="collection-item active light-blue darken-1">Корзина</li>
        {
          order.length ? order.map(item => (
            <BasketItem
                key={item.id}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
                {...item}
            />)
          ) : (
            <li className="collection-item">Корзина пуста</li>
          )}
        <li className="collection-item active light-blue darken-1">Общая стоимость: {totalPrice} руб</li>
        <button className="secondary-content btn-small light-blue darken-1">Оформить</button>
        <i
          className='material-icons basket-close'
          onClick={handleBascketShow}
        >
          close
        </i>
    </ul>
  )
}

export {BasketList}