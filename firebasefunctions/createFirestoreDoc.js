import { addDoc, collection } from "firebase/firestore"

export async function createFirestoreDoc(db, collectionName, object ){


    const dbRef = collection(db, collectionName);
    await addDoc(dbRef, object)
}




const googleHandler = async () => {
    // signInWithRedirect(auth, googleAuthProvider);
    const result = await signInWithPopup(auth, googleAuthProvider);
    // console.log(result);
    if (result) {
      // This is the signed-in user
      const user = result.user;
      const dbRef = collection(db, "customers");
      await addDoc(dbRef, {
        uid: user.uid,
        name: user.displayName,
        authProvider: "Google",
        email: user.email,
      });
    }
  };