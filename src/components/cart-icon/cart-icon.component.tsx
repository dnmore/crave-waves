import { setIsCartOpen } from "../../store/cart/cartSlice";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const cartCount = useAppSelector((state) => state.cart.cartCount);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingBag className="cart-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
