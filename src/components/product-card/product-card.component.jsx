import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <div className="product-image">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <div className="product-card-body">
        <span className="name">{name}</span>
        <span className="price">€{price}</span>
        <button onClick={addProductToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
