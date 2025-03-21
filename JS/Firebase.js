// Firebase is used to create and authenticate user accounts


/// Import necessary modules from Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG5amLvWYQlE2bYG09RInPW4vyR33MYQo",
  authDomain: "style-sync-cf186.firebaseapp.com",
  projectId: "style-sync-cf186",
  storageBucket: "style-sync-cf186.firebasestorage.app",
  messagingSenderId: "278857463418",
  appId: "1:278857463418:web:9739eda79f821e2c6badc3",
  measurementId: "G-LNBMD9P5J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app); // Initialize Firestore


// Authentication functions
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Firestore functions
export const addUserData = async (userData) => {
    try {
        const usersRef = collection(db, "users");
        await addDoc(usersRef, userData);
    } catch (error) {
        console.error("Error adding user data: ", error);
        throw error; // Re-throw the error for handling in the calling function
    }
};

export const getUserData = async () => {
    try {
        const usersRef = collection(db, "users");
        const querySnapshot = await getDocs(usersRef);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error retrieving user data: ", error);
        throw error;
    }
};


// Authentication state change listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in:', user);
    // Redirect to a logged-in page or perform other actions
  } else {
    console.log('No user is signed in');
    // Redirect to login page or perform other actions
  }
});


export { app, auth, db };
