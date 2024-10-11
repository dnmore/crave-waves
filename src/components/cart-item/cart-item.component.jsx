import { CartItemContainer } from "./cart-item.styles";


const CartItem = ({ cartItem }) => {
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

export default CartItem;
