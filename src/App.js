import './App.css';
import HomePage from './pages/homepage/homepage'
import { Route, Routes } from 'react-router-dom'
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { onSnapshot } from '@firebase/firestore';
import React from 'react';
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { getAuth } from '@firebase/auth';
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import CheckoutPage from './pages/checkout/checkout'



class App extends React.Component {

  unsubscribeFromAuth = null;

  currentAuth = getAuth();
  //when any changes occur on firebase, the auth state will change and the app will rerender
  //the relevant user data
  componentDidMount(){
    const {setCurrentUser} = this.props;

   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }
      setCurrentUser({userAuth})
  });
}

  //upon the closing of the app, the user is removed from auth
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignInAndSignUpPage/>} />
          <Route exact path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
