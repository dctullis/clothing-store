import React from 'react'
import CustomButton from '../custom-button/custom-button'
import './cart.styles.scss'
import CartItem from '../cart-item/cart-item'
import {connect} from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

const Cart = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
       <div className='cart-items'  />
       {
            cartItems.map(cartItem =>
                <CartItem key={cartItem.id} item={cartItem}/>
            )
       }
       <CustomButton>CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(Cart)