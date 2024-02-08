import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CheckoutContainer, CheckoutBody, Total } from "./checkout.styles";
import CheckoutCard from "../../components/checkout-card/checkout-card.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutBody>
        {cartItems.map((cartItem) => (
          <CheckoutCard key={cartItem.id} cartItem={cartItem} />
        ))}
      </CheckoutBody>

      <Total>TOTAL: €{(cartTotal).toFixed(2)}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
