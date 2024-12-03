import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase-config";

export const doCreateUserWithEmailAndPass = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInUserWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
}

export const doSignOut = () => {
    return auth.signOut();

};

/*TODO: Firestore cuvanje ljudi
  TODO: PASS RESET */
