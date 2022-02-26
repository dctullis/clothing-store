import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
  return (
      //renders google-sign-in if passed down
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
  )
}

export default CustomButton