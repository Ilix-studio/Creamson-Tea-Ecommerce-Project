<<<<<<< HEAD
import { loadStripe } from '@stripe/stripe-js';
=======
import { loadStripe } from "@stripe/stripe-js";
>>>>>>> successPage

let stripePromise;

const getStripe = () => {
<<<<<<< HEAD
  if(!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
}

export default getStripe;
=======
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;
>>>>>>> successPage
