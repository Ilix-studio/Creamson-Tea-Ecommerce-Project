<<<<<<< HEAD
import Stripe from 'stripe';
=======
import Stripe from "stripe";
>>>>>>> successPage

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
<<<<<<< HEAD
  if (req.method === 'POST') {
    console.log(req.body.cartItems)
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1LaebvSIUF9yBuOmPr8eRE3M' }, 
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/luq5f46e/production/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'inr',
              product_data: { 
=======
  if (req.method === "POST") {
  
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "required",
        shipping_options: [
          { shipping_rate: "shr_1LaeXFSIUF9yBuOmj0lIYVcQ" },
          { shipping_rate: "shr_1LaebvSIUF9yBuOmPr8eRE3M" },
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace(
            "image-",
            "https://cdn.sanity.io/images/luq5f46e/production/".replace(
              "-webp",
              ".webp"
            )
          );
          return {
            price_data: {
              currency: "inr",
              product_data: {
>>>>>>> successPage
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
<<<<<<< HEAD
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

=======
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),

        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
>>>>>>> successPage
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
<<<<<<< HEAD
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
=======
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
>>>>>>> successPage
