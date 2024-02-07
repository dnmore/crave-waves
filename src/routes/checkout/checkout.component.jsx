import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";
import CheckoutCard from "./checkout-card/checkout-card.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="main-container">
      <div className="checkout-container">
        {cartItems.map((cartItem) => (
          <CheckoutCard key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <div className="total">TOTAL: €{(cartTotal).toFixed(2)}</div>
    </div>
  );
};

export default Checkout;
