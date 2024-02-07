import { useContext } from "react";

import { CartContext } from "../../../contexts/cart.context";

import "./checkout-card.styles.scss";

const CheckoutCard = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-card-container">
      <div className="checkout-card-image">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="checkout-card-body">
        <h3>{name}</h3>
        <span className="price">Price: €{price}</span>
        <div className="quantity">
          <button onClick={() => removeItemFromCart(cartItem)}>  &#10094; </button>
          <p>{quantity}</p>
          <button onClick={() => addItemToCart(cartItem)}>  &#10095; </button>
          <button className="clear" onClick={() => clearItemFromCart(cartItem)}>  &#10005; </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
