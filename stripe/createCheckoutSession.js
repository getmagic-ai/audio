/* Get imports here for
1. Db operations on firestore, so we can add a checkout_sessions collection on our customers collection
2. Get initializeStripe for us to redirect the user
3. Ensure we can listent to snapshots */

import { db, app } from "../config/firebase-config";
import { collection, addDoc, doc, onSnapshot } from "firebase/firestore";
import initializeStripe from "./initializeStripe";

export async function createCheckoutSession(uid) {
  const docRef = doc(db, "customers", uid);
  const checkoutRef = collection(docRef, "checkout_sessions");

  const checkout_session_ref = await addDoc(checkoutRef, {
    price: "price_0MSoSngJmzQDibAWvQ0V29bC",
    success_url: process.env.STRIPE_SUCCESS_LINK,
    cancel_url: process.env.STRIPE_FAILURE_LINK,
  });

  //wait for the checkout session to get attached, use onSnapshot for this
  onSnapshot(checkout_session_ref, async (snap) => {
    const { sessionId } = snap.data();
    if (sessionId) {
      console.log("redirecting.... hold on...");
      const stripe = await initializeStripe();
      stripe.redirectToCheckout({ sessionId });
    }
  });
}
