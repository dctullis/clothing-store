import './App.css';
import HomePage from './pages/homepage/homepage'
import { Route, Routes } from 'react-router-dom'
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { onSnapshot } from '@firebase/firestore';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();

    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  //when any changes occur on firebase, the auth state will change and the app will rerender
  //the relevant user data
  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        });
      }
      this.setState({currentUser: userAuth})
  });
}

  //upon the closing of the app, the user is removed from auth
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
