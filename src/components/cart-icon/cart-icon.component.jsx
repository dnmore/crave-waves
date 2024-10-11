import { useClickAway } from "react-use";
import { useContext, useRef } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const ref = useRef(null);

  useClickAway(ref, () => setIsCartOpen(false));

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen} ref={ref}>
      <ShoppingBag className="cart-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
