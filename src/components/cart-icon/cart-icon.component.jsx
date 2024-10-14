import { useSelector, useDispatch } from "react-redux"; 
import { setIsCartOpen } from "../../store/cart/cartSlice";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);  
  const cartCount = useSelector((state) => state.cart.cartCount);    

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