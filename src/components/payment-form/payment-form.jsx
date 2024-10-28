import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { FormContainer } from "./payment-form.styles";

const PaymentForm = (fullName) => {
  const amount = useSelector((state) => state.cart.cartTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: Math.round(amount * 100) }),
    });

    const jsonResponse = await response.json();

    if (!jsonResponse.paymentIntent) {
      console.error(
        "Payment Intent creation failed:",
        jsonResponse.error || jsonResponse
      );
      alert("Payment intent failed.");
      setIsProcessingPayment(false);
      return;
    }

    const clientSecret = response.paymentIntent.client_secret;

    if (!clientSecret) {
      alert("Failed to create payment intent.");
      setIsProcessingPayment(false);
      return;
    }

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: fullName,
        },
      },
    });

    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful");
      }
    }
  };

  return (
    <FormContainer onSubmit={paymentHandler}>
      <CardElement />
      <Button
        isLoading={isProcessingPayment}
        buttonType={BUTTON_TYPE_CLASSES.primary}
      >
        PAY NOW
      </Button>
    </FormContainer>
  );
};

export default PaymentForm;
