import { CartItemContainer } from "./cart-item.styles";
import type { CartItem } from "../../types/definitions";

type CartItemProps = {
  cartItem: CartItem
}


const CartProduct = ({ cartItem } : CartItemProps) => {
  const { name, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <h3>{name}</h3>
      <span>
        {quantity} x €{price.toFixed(2)}
      </span>
    </CartItemContainer>
  );
};

export default CartProduct;
