// firebase.js
// Initialize Firebase for MiniGram

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBIgc8p4dhhuZqPGDgqDGdezTXB4HPrMtI",
  authDomain: "telegram-social-d1264.firebaseapp.com",
  projectId: "telegram-social-d1264",
  storageBucket: "telegram-social-d1264.firebasestorage.app",
  messagingSenderId: "888991978006",
  appId: "1:888991978006:web:465f11fca3fe2eccb89b37",
  measurementId: "G-1JZ0TW7KRB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);