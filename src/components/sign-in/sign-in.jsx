import React from 'react';

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { email , password } = this.state;
        const auth = getAuth();

        try {
            signInWithEmailAndPassword(auth, email, password).then(() => {
                this.setState({ email: '', password: ''});
            })
        } catch (error) {
            console.log(error);
        }

        /*
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });



        */

    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        label="email"
                        value={this.state.email} required
                    />

                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        handleChange={this.handleChange}
                        value={this.state.password} required
                    />

                    <div className='buttons'>
                        <CustomButton type="submit" >Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {''}
                            Sign in with Google {''}
                        </CustomButton>
                    </div>

                </form>

            </div>
        )
    }


}

export default SignIn;