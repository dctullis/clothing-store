import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import CartIcon from '../cart-icon/cart-icon';
import Cart from '../cart/cart';


const Header = ({ currentUser, hidden }) => {

    const signOutFunc = () => {
        console.log(auth)
        signOut(auth)
    }


    const auth = getAuth()
    console.log(currentUser)
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    auth.currentUser === null ? (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                        ) : (
                        <div className="option" onClick={() => signOutFunc()}>
                            SIGN OUT
                        </div>
                    )}
                <CartIcon />
            </div>
            {
                hidden ? null : <Cart />
            }
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: {hidden} }) => ({
    currentUser,
    hidden

});

export default connect(mapStateToProps)(Header);