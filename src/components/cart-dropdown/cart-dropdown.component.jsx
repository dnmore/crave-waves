import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems, CartDropdownButton } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
          
        ))}
      </CartItems>
      <CartDropdownButton onClick={goToCheckoutHandler}>CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
