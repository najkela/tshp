import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAa_gBRR978A7Juv0Zjckr35JXQF4t2AhM",
    authDomain: "trica-stikla-penzija.firebaseapp.com",
    projectId: "trica-stikla-penzija",
    storageBucket: "trica-stikla-penzija.firebasestorage.app",
    messagingSenderId: "744917814363",
    appId: "1:744917814363:web:6ad820f2a187a70d51437e",
    measurementId: "G-FQHLELYFHH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);


export { app, auth, db };