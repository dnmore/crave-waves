// import { useContext } from "react";

// import { CartContext } from "../../contexts/cart.context";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cartSlice";
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
  // const { addItemToCart, removeItemFromCart, clearItemFromCart } =
  //   useContext(CartContext);
  const dispatch = useDispatch();
  return (
    <CheckoutCardContainer>
      <CheckoutCardImage>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutCardImage>
      <CheckoutCardBody>
        <h3>{name}</h3>
        <span> €{price.toFixed(2)}</span>
        <QuantityActions>
          <QuantityButton onClick={() => dispatch(clearItemFromCart(cartItem))}>
            <FaRegTrashAlt />
          </QuantityButton>
          <QuantityButton
            onClick={() => dispatch(removeItemFromCart(cartItem))}
          >
            <FaCircleMinus />
          </QuantityButton>

          <p>{quantity}</p>
          <QuantityButton onClick={() => dispatch(addItemToCart(cartItem))}>
            <FaCirclePlus />
          </QuantityButton>
        </QuantityActions>
      </CheckoutCardBody>
    </CheckoutCardContainer>
  );
};

export default CheckoutCard;
