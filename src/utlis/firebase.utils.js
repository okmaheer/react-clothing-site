import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDfpnj7bi0iyCS72K5HYpWvsYp71V2aLdw",
  authDomain: "crown-app-f2284.firebaseapp.com",
  projectId: "crown-app-f2284",
  storageBucket: "crown-app-f2284.appspot.com",
  messagingSenderId: "376696572184",
  appId: "1:376696572184:web:2f7b8bd1e42fb9fc8f766d",
  measurementId: "G-ECY89Q035S"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef = doc(db, 'users',userAuth.uid)
   console.log(userDocRef);

   const userSnapshot = await getDoc(userDocRef)
   console.log(userSnapshot.exists())
}