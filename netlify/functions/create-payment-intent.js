require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    if (!Number.isInteger(amount)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid amount format." }),
      };
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      payment_method_types: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log("Stripe Error:", error);

    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
