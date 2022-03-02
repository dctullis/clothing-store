import React from 'react'
import CustomButton from '../custom-button/custom-button'
import './cart.styles.scss'

const Cart = () => {
  return (
    <div className='cart-dropdown'>
       <div className='cart-items' />
       <CustomButton>CHECKOUT</CustomButton>
    </div>
  )
}

export default Cart