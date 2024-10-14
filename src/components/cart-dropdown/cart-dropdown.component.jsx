import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentUser = useSelector((state) => state.user.currentUser)
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    if(currentUser){
      navigate("/checkout");
    } else {
      navigate("/sign-in");
    }
    
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
      <Button
        buttonType={BUTTON_TYPE_CLASSES.accent}
        onClick={goToCheckoutHandler}
      >
        CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
