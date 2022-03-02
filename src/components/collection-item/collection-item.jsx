import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button'
import  { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

//including addItem destructures the function from mapToDispatch
const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;
  return (
    <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className="collection-footer">
            <span className="name">{ name }</span>
            <span className="price">{ price }</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> Add to cart</CustomButton>

    </div>
  )
}
/*
when this local addItem is called, the item is dispatched as the addItem property in cart.actions
cart.actions takes that item and presents itself as
{
  case: 'ADD_ITEM',
  item: 'hat'
}
to the reducer. The reducer then adds it to the array of cart related states.
*/

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);