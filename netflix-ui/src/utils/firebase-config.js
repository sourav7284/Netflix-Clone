import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA1HjuhaTpgm6Vk3PaqQ-gfOxhvJw3WTk",
  authDomain: "react-netflix-clone-b4054.firebaseapp.com",
  projectId: "react-netflix-clone-b4054",
  storageBucket: "react-netflix-clone-b4054.appspot.com",
  messagingSenderId: "159948361470",
  appId: "1:159948361470:web:2e58699bd6d6aa7ae95faf",
  measurementId: "G-HVY48SJQMV"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);