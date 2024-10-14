import { useSelector } from "react-redux";

import {
  CheckoutContainer,
  CheckoutBody,
  CheckoutPayment,
} from "./checkout.styles";
import CheckoutCard from "../../components/checkout-card/checkout-card.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  return (
    <CheckoutContainer>
      <CheckoutBody>
        {cartItems.map((cartItem) => (
          <CheckoutCard key={cartItem.id} cartItem={cartItem} />
        ))}
      </CheckoutBody>
      <CheckoutPayment>
        <span>TOTAL: €{cartTotal.toFixed(2)}</span>

        <Button buttonType={BUTTON_TYPE_CLASSES.primary}>PAY NOW</Button>
      </CheckoutPayment>
    </CheckoutContainer>
  );
};

export default Checkout;
