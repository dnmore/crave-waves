const CartItem = ({ cartItem }) => {
  const { name, quantity, price } = cartItem;
  return (
    <>
      <h3>{name}</h3>
      <span>
        {quantity} x €{price}
      </span>
    </>
  );
};

export default CartItem;
