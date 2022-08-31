import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup,signOut, GoogleAuthProvider, createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC7LK_PlZQUabyj5ujbE3H55KW25qM7kok",
    authDomain: "clothing-project-c36fb.firebaseapp.com",
    projectId: "clothing-project-c36fb",
    storageBucket: "clothing-project-c36fb.appspot.com",
    messagingSenderId: "1086390720962",
    appId: "1:1086390720962:web:6bcff8cad8d466eb19de5b"
};

const firbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})


export const db = getFirestore()
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const createUserDocumentFromAuth = async (userAuth , additionalInformation) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log(error)
        }
    }

    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async() => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)