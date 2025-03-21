console.log("auth.js script loaded");

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./Firebase.js"; // Import Firebase instance

const auth = getAuth(app);

// Get the buttons
const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user.email);
        if (loginButton) loginButton.style.display = "none"; // Hide login button
        if (logoutButton) logoutButton.style.display = "inline-block"; // Show logout button
    } else {
        console.log("No user is logged in.");
        if (loginButton) loginButton.style.display = "inline-block"; // Show login button
        if (logoutButton) logoutButton.style.display = "none"; // Hide logout button
    }
});

// Handle user sign-out
if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
                alert("Logged out successfully.");
                window.location.href = "signin.html"; // Redirect to sign-in page after logout
            })
            .catch((error) => {
                console.error("Logout error:", error.message);
                alert("Logout failed: " + error.message);
            });
    });
}

// Handle Sign In form submission
const signInForm = document.getElementById("signIn");
if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("signInEmail").value;
        const password = document.getElementById("signInPassword").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User signed in:", userCredential.user);
                window.location.href = "index.html"; // Redirect to home page after login
            })
            .catch((error) => {
                console.error("Sign In Error:", error.message);
                alert("Sign In Failed: " + error.message);
            });
    });
}

// Handle Create Account form submission
const createAccountForm = document.getElementById("createAccount");
if (createAccountForm) {
    createAccountForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("createEmail").value;
        const password = document.getElementById("createPassword").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User signed up:", userCredential.user);
                window.location.href = "index.html"; // Redirect to home page after sign-up
            })
            .catch((error) => {
                console.error("Sign Up Error:", error.message);
                alert("Sign Up Failed: " + error.message);
            });
    });
}

// Toggle between Sign In and Create Account forms
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const signInLink = document.getElementById("signInLink");
    const createAccountLink = document.getElementById("createAccountLink");
    const signInForm = document.getElementById("signInForm");
    const createAccountForm = document.getElementById("createAccountForm");

    // Show the Sign In form by default
    signInForm.classList.add("show");
    createAccountForm.classList.remove("show");

    // Event listener for Sign In link
    signInLink.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Sign In link clicked");

        // Show Sign In form and hide Create Account form
        signInForm.classList.add("show");
        createAccountForm.classList.remove("show");

        // Change active link underline
        signInLink.classList.add("active");
        createAccountLink.classList.remove("active");
    });

    // Event listener for Create Account link
    createAccountLink.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Create Account link clicked");

        // Show Create Account form and hide Sign In form
        createAccountForm.classList.add("show");
        signInForm.classList.remove("show");

        // Change active link underline
        createAccountLink.classList.add("active");
        signInLink.classList.remove("active");
    });
});