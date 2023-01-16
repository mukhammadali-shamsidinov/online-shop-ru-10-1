import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBOdfPbidt_5_J4IxiWsztJ0czVV_s1z1g",
  authDomain: "online-shop-25b66.firebaseapp.com",
  projectId: "online-shop-25b66",
  storageBucket: "online-shop-25b66.appspot.com",
  messagingSenderId: "505120035408",
  appId: "1:505120035408:web:38d66e861a68b55d577755"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}