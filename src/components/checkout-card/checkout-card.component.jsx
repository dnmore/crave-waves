import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutCardContainer,
  CheckoutCardImage,
  CheckoutCardBody,
  Quantity,
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
        <p>{name}</p>
        <span>Price: €{price}</span>
        <Quantity>
          <QuantityButton onClick={() => removeItemFromCart(cartItem)}>
            {" "}
            &#10094;{" "}
          </QuantityButton>
          <p>{quantity}</p>
          <QuantityButton onClick={() => addItemToCart(cartItem)}> &#10095; </QuantityButton>
          <QuantityButton className="clear" onClick={() => clearItemFromCart(cartItem)}>
            {" "}
            &#10005;{" "}
          </QuantityButton>
        </Quantity>
      </CheckoutCardBody>
    </CheckoutCardContainer>
  );
};

export default CheckoutCard;
