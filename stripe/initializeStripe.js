import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe("pk_test_nGfdBGt8mRdeCpB6JCX60Mz9");
    return stripePromise
  }
};

export default initializeStripe;