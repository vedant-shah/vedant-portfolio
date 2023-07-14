import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoBRt_zPVZF3l06D2idhJqa9iualbfbg0",
  authDomain: "portfolio-95612.firebaseapp.com",
  projectId: "portfolio-95612",
  storageBucket: "portfolio-95612.appspot.com",
  messagingSenderId: "340861589819",
  appId: "1:340861589819:web:f378e5b6076491d5047f1e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
