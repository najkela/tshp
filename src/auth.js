import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "./firebase-config";

export const doCreateUserWithEmailAndPass = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInUserWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);

};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const email = result.user.email;

        // Proveri da li email već postoji
        const signInMethods = await fetchSignInMethodsForEmail(auth, email);

        if (signInMethods.length > 0 && signInMethods.includes("password")) {
            // Ako postoji nalog sa email/lozinka, poveži Google nalog
            const user = auth.currentUser;
            await linkWithCredential(user, credential);
        }

        return result.user; // Uspešna prijava
    } catch (error) {
        console.error("Greška pri Google prijavi:", error);
        throw error;
    }
};

export const doSignOut = () => {
    return auth.signOut();

};

/*TODO: Firestore cuvanje ljudi
  TODO: PASS RESET */
