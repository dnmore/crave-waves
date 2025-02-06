import { useState, FormEvent, ChangeEvent } from "react";

import { useAppSelector } from "../../store/hooks";
import FormInput from "../../components/form-input/form-input.component";
import CheckoutCard from "../../components/checkout-card/checkout-card.component";
import PaymentForm from "../../components/payment-form/payment-form";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import {
  CheckoutContainer,
  CheckoutBody,
  CheckoutDetails,
  CheckoutPayment,
  CheckoutAddress,
} from "./checkout.styles";

const initialFormFields = {
  fullName: "",
  address: "",
  postalCode: "",
  city: "",
  state: "",
};

const initialErrors = {
  fullName: "",
  address: "",
  postalCode: "",
  city: "",
  state: "",
};

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const cartTotal = useAppSelector((state) => state.cart.cartTotal);
  const [formFields, setFormFields] = useState(initialFormFields);
  const { fullName, address, postalCode, city, state } = formFields;
  const [errors, setErrors] = useState(initialErrors);
  const [detailsSaved, setDetailsSaved] = useState(false);

  const validateFields = () => {
    const newErrors = { ...initialErrors };

    if (!fullName) newErrors.fullName = "Full name is required";
    if (!address) newErrors.address = "Address is required";
    if (!postalCode) newErrors.postalCode = "Postal code is required";
    else if (postalCode.length < 4)
      newErrors.postalCode = "Postal code must be at least 4 characters";
    if (!city) newErrors.city = "City is required";
    if (!state) newErrors.state = "State is required";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateFields()) return;
    setDetailsSaved(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  return (
    <CheckoutContainer>
      <span className="total">TOTAL: €{cartTotal.toFixed(2)}</span>
      <CheckoutBody>
        {cartItems.map((cartItem) => (
          <CheckoutCard key={cartItem.id} cartItem={cartItem} />
        ))}
      </CheckoutBody>
      <CheckoutDetails>
        <h3>ENTER YOUR DETAILS</h3>
        {detailsSaved ? (
          <>
            <CheckoutAddress>
              <h4>{fullName}</h4>
              <p>{address}</p>
              <p>{postalCode}</p>
              <p>{city}</p>
              <p>{state}</p>
            </CheckoutAddress>

            <CheckoutPayment
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3>ENTER PAYMENT DETAILS</h3>
              <PaymentForm fullName={fullName} />
            </CheckoutPayment>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Full Name"
              type="text"
              value={fullName}
              onChange={handleChange}
              name="fullName"
            />
            {errors.fullName && <span>{errors.fullName}</span>}
            <FormInput
              label="Address"
              type="text"
              value={address}
              onChange={handleChange}
              name="address"
            />
            {errors.address && <span>{errors.address}</span>}
            <FormInput
              label="Postal Code"
              type="text"
              value={postalCode}
              onChange={handleChange}
              name="postalCode"
            />
            {errors.postalCode && <span>{errors.postalCode}</span>}
            <FormInput
              label="City"
              type="text"
              value={city}
              onChange={handleChange}
              name="city"
            />
            {errors.city && <span>{errors.city}</span>}
            <FormInput
              label="State"
              type="text"
              value={state}
              onChange={handleChange}
              name="state"
            />
            {errors.state && <span>{errors.state}</span>}
            <Button buttonType={BUTTON_TYPE_CLASSES.primary} type="submit">
              SAVE
            </Button>
          </form>
        )}
      </CheckoutDetails>
    </CheckoutContainer>
  );
};

export default Checkout;
