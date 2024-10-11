import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles";
import Button, { BUTTON_TYPE_CLASSES} from "../button/button.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
      {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <p>Empty</p>
        )}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.accent} onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
