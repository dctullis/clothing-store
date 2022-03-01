import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import { getAuth, signOut } from "firebase/auth";


const Header = ({ currentUser }) => {
    const auth = getAuth()
  return (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser.userAuth === null ? (
                    <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
                ) : (
                <div className="option" onClick={() => signOut(auth)}>
                    SIGN OUT
                </div>

            )}
        </div>

    </div>
  )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);