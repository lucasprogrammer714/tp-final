import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAKLVPnwAfiL4d4_uc7e9jnuDxNnUCITwo",
  authDomain: "technoworlddb-a0636.firebaseapp.com",
  projectId: "technoworlddb-a0636",
  storageBucket: "technoworlddb-a0636.firebasestorage.app",
  messagingSenderId: "788620231674",
  appId: "1:788620231674:web:4bc89d7d642dc4bde71a43"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);