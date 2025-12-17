import {auth, db} from "./firebase"
import { signInWithEmailAndPassword, onAuthStateChanged as fbOnAuthStateChanged, signOut as fbSignOut, getIdToken as fbGetIdToken, User as FirebaseUser } from "firebase/auth"
import {doc, getDoc, setDoc, onSnapshot, updateDoc, serverTimestamp, DocumentData, DocumentReference} from "firebase/firestore"


export interface UserProfile {
    uid : string
    email : string | null
    displayName : string | null
    createdAt : any
    projects? : []
}


// sign in (client)

export async function signIn(email:string, password:string){
    const credential = await signInWithEmailAndPassword(auth, email, password)
    const user = credential.user
    await createUserProfileIfNotExists(user)
    return user
}

// sign out

export async function signOut(){
    await fbSignOut(auth)
}

// return the current user ID token

export async function getIdToken(force = false):Promise<string | null> {
    const user = auth.currentUser
    if(!user) return null 
    return await fbGetIdToken(user, force)
}

// return current user 

export function getCurrentUser(){
    return auth.currentUser //null if user is not logged in
}

/////FIRESTORE/////

// create a user doc if it doesnt exists

export async function createUserProfileIfNotExists(user:FirebaseUser){
    if(!user || !user.uid) throw new Error("Invalid user for profile creation.")
    const ref = doc(db, "users", user.uid)
    const snap = await getDoc(ref)
    if(snap.exists()){
        const profile:UserProfile = {
            uid : user.uid ?? null,
            email : user.email ?? null,
            displayName : user.displayName ?? null,
            createdAt : serverTimestamp()
        }
        await setDoc(ref, profile)
        return profile
    }
    return snap.data() as UserProfile
}

// fecth a single user profile 

export async function getUserProfile(uid:string):Promise<UserProfile | null> {
    const ref = doc(db, "users", uid)
    const snap = await getDoc(ref)
    if(!snap.exists()) return null
    return snap.data() as UserProfile
}

// real time listener for profile changes 

export function subscribeToUserProfile(uid:string, onUpdate: (profile : UserProfile | null) => void){
    const ref = doc(db, "users", uid)
    const unsubscribe = onSnapshot(ref, snap => {
        onUpdate(snap.exists() ? (snap.data() as UserProfile) : null)
    })
    return unsubscribe
}

/////CLIENT AUTH LISTENER//////

export function onAuthStateChangedListener(onChange: (user: FirebaseUser | null, profile : UserProfile | null) => void){
    const unsubscribe = fbOnAuthStateChanged(auth, async (user) => {
        if(!user){onChange(null, null); return}

        try {
            const profile = await getUserProfile(user.uid)
            onChange(user, profile)
        }catch(err){
            console.error("Failed to fetch user profile after auth change: ", err)
            onChange(user, null)
        }
    })

    return unsubscribe
}



////SMALL HELPERS////

export async function updateUserProfile(uid:string, data: Partial<UserProfile>){
    const ref = doc(db, "users", uid)
    await updateDoc(ref as DocumentReference<DocumentData>, data as any)
}