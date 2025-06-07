import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcuy_ddUMht5QJC1iflKiG1ac4nJ3YKho",
    authDomain: "trial-d0293.firebaseapp.com",
    projectId: "trial-d0293",
    storageBucket: "trial-d0293.appspot.com",
    messagingSenderId: "417964019865",
    appId: "1:417964019865:web:2227140f87231d80512808",
    measurementId: "G-FJTZQCMFYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Function
window.login = function () {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("Logged in Successfully!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        })
        .catch(error => {
            alert(error.message);
        });
};

// Sign Up Function (Fixed)
window.signUp = function () {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("Signup Successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        })
        .catch(error => {
            alert(error.message);
        });
};
