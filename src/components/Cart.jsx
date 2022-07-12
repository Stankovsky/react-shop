import React from 'react'

const Cart = (props) => {
    const {quantity = 0, handleBascketShow = Function.prototype} = props
  return (
    <div className='cart purple darken-1 white-text'
         onClick={handleBascketShow}
    >
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  )
}

export {Cart}