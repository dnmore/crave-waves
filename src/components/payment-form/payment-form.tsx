import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { clearCart } from "../../store/cart/cartSlice";
import { FormContainer, CardElementWrapper } from "./payment-form.styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { StripeCardElement } from "@stripe/stripe-js";

const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

type PaymentFormProps = {
  fullName: string;
};

const PaymentForm = ({ fullName }: PaymentFormProps) => {
  const amount = useAppSelector((state) => state.cart.cartTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);
    const convertedAmount = Math.round(amount * 100);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertedAmount }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
        billing_details: {
          name: fullName,
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      setPaymentError(
        paymentResult.error.message ?? "An error occurred during payment."
      );
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        dispatch(clearCart());
        navigate("/success");
      }
    }
  };

  return (
    <FormContainer onSubmit={paymentHandler}>
      <CardElementWrapper>
        <CardElement options={cardStyle} />
      </CardElementWrapper>

      <Button
        isLoading={isProcessingPayment}
        buttonType={BUTTON_TYPE_CLASSES.primary}
      >
        PAY NOW
      </Button>
      {paymentError && <div style={{ color: "#fa755a" }}>{paymentError}</div>}
    </FormContainer>
  );
};

export default PaymentForm;
