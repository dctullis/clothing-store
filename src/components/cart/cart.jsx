import React from 'react'
import CustomButton from '../custom-button/custom-button'
import './cart.styles.scss'
import CartItem from '../cart-item/cart-item'
import {connect} from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {useNavigate} from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const Cart = ({ cartItems, history, dispatch }) => {

  let navigate = useNavigate();

  function handleClick() {
      navigate(`/checkout`);
  };

  return (
    <div className='cart-dropdown'>
       <div className='cart-items'  />
       {    cartItems.length ? (
            cartItems.map(cartItem =>
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
            :
            <span className='empty-message'>Your cart is empty</span>
       }
       <CustomButton onClick={() => {
         handleClick();
         dispatch(toggleCartHidden());
       }}>
         CHECKOUT
        </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(Cart);