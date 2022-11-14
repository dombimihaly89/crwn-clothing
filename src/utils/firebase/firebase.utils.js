import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB3UsASRv4-vkPG2PK3UMzZtNPannUTV6M",
  authDomain: "crwn-clothing-db-9259c.firebaseapp.com",
  projectId: "crwn-clothing-db-9259c",
  storageBucket: "crwn-clothing-db-9259c.appspot.com",
  messagingSenderId: "659874722485",
  appId: "1:659874722485:web:1235f7c26cc87de26bc4fc"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)

  if (!userSnapshot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log("error creating the user ", error.message);
    }
  }
  return userDocRef;

}
