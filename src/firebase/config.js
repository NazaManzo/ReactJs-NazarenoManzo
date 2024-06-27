
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
apiKey: "AIzaSyDUk5_mdN8BiLUwTDHqQa6MrZQSPvLMsVY",
authDomain: "proyecto-final-fe2a5.firebaseapp.com",
projectId: "proyecto-final-fe2a5",
storageBucket: "proyecto-final-fe2a5.appspot.com",
messagingSenderId: "155237523133",
appId: "1:155237523133:web:edd55959c47539204d61d4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);