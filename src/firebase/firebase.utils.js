import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import { getDoc } from "firebase/firestore";



const config = {
  apiKey: "AIzaSyA7mKEydFAymfQ_R0eD3NaYHibQMlRZeoU",
  authDomain: "tellium-665c1.firebaseapp.com",
  projectId: "tellium-665c1",
  storageBucket: "tellium-665c1.appspot.com",
  messagingSenderId: "385238315841",
  appId: "1:385238315841:web:21a5eac7e68f67b1be27c0",
  measurementId: "G-Q3EZGHZ3HV",
};

export const createUserProfileDocument = async (userAuth, username) => {
    if (!userAuth) return;

  const docRef = firebase.firestore().doc(`users/${userAuth.uid}`);
  const snapShot = await getDoc(docRef);
    // const userRef = firestore.doc(`users/${userAuth.id}`);
    // const snapShot = await userRef.get();

    if (!snapShot.exist) {
        const { email } = userAuth;
        const createdAt = new Date();

        try {
            await docRef.set({
                email,
                createdAt,
                username
            });
        } catch (error) {
            console.log("error creating a new user", error.message)
        }
    }

    return docRef;
} 



firebase.initializeApp(config);
export const auth = getAuth();
export const firestore = firebase.firestore();


export default firebase;