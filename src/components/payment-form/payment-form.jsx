import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { FormContainer } from "./payment-form.styles";

const PaymentForm = (fullName, detailsSaved) => {
  const amount = useSelector((state) => state.cart.cartTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!detailsSaved || !stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const {
      paymentIntent: { clientSecret },
    } = response;

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
