import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7nbILQ8J9q-UzlNcJSPHuCIh-G851JIw",
    authDomain: "clothing-store-a9f7b.firebaseapp.com",
    projectId: "clothing-store-a9f7b",
    storageBucket: "clothing-store-a9f7b.appspot.com",
    messagingSenderId: "735709752339",
    appId: "1:735709752339:web:35c9d91e114408cb5da3e6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = doc(firestore, `users/${userAuth.uid}`);

    console.log(userRef)


    const snapShot = await getDoc(userRef);


    if(snapShot.exists) {
        console.log(userRef)
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, ({
                displayName, email, createdAt, ...additionalData
            }))
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}



const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
// provider.setCustomerParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);


export default app;
