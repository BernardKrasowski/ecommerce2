import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCB2Rc4YPFZwh1Y7f1YYfQDNVQEEhZSwig",
  authDomain: "ecommerce2-6b34f.firebaseapp.com",
  projectId: "ecommerce2-6b34f",
  storageBucket: "ecommerce2-6b34f.appspot.com",
  messagingSenderId: "507563137826",
  appId: "1:507563137826:web:16fecdcd8c526cf00fa37b",
};
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/////////firestore

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid); /// create into collection users document with name userAuth.uid

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await setDoc(userDocRef, {
        /////////// add data to your document userAuth.uid
        displayName,
        email,
        createDate,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
  /// if user data does not exists
  /// if user data exists
  /// return userDocRef
};
