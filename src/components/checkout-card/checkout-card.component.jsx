import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

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
          <QuantityButton onClick={() => clearItemFromCart(cartItem)}>
          <FaRegTrashAlt />
          </QuantityButton>
          <QuantityButton onClick={() => removeItemFromCart(cartItem)}>
            <FaCircleMinus />
          </QuantityButton>

          <p>{quantity}</p>
          <QuantityButton onClick={() => addItemToCart(cartItem)}>
            <FaCirclePlus />
          </QuantityButton>
        </QuantityActions>
      </CheckoutCardBody>
    </CheckoutCardContainer>
  );
};

export default CheckoutCard;
