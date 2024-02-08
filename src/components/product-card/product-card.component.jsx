import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  ProductCardContainer,
  ProductImage,
  ProductBody,
  Name,
  Price,
  ProductButton,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductImage>
        <img src={imageUrl} alt={`${name}`} />
      </ProductImage>

      <ProductBody>
        <Name>{name}</Name>
        <Price>€{price}</Price>
        <ProductButton onClick={addProductToCart}>Add to Cart</ProductButton>
      </ProductBody>
    </ProductCardContainer>
  );
};

export default ProductCard;
