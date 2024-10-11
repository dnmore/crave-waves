import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";



import {
  CheckoutCardContainer,
  CheckoutCardImage,
  CheckoutCardBody,
  QuantityActions,
  QuantityButton,
} from "./checkout-card.styles";

const CheckoutCard = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  return (
    <CheckoutCardContainer>
      <CheckoutCardImage>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutCardImage>
      <CheckoutCardBody>
        <h3>{name}</h3>
        <span> €{price.toFixed(2)}</span>
        <QuantityActions>
          <QuantityButton onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
          </QuantityButton>

          <p>{quantity}</p>
          <QuantityButton onClick={() => addItemToCart(cartItem)}>
          &#10095;
          </QuantityButton>

          <QuantityButton onClick={() => clearItemFromCart(cartItem)}>
          &#10005;
          </QuantityButton>
        </QuantityActions>
      </CheckoutCardBody>
    </CheckoutCardContainer>
  );
};

export default CheckoutCard;
