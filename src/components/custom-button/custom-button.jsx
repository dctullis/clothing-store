import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
  return (
      //renders google-sign-in if passed down
    <button className={` ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
  )
}

export default CustomButton