import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cartSlice";

import {
  ProductCardContainer,
  ProductBody,
  ProductImage,
} from "./product-card.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCardContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <ProductImage>
        <img src={imageUrl} alt={`${name}`} />
      </ProductImage>

      <ProductBody>
        <h3>{name}</h3>
        <p>€{price.toFixed(2)}</p>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.primary}
          onClick={addProductToCart}
        >
          Add to Cart
        </Button>
      </ProductBody>
    </ProductCardContainer>
  );
};

export default ProductCard;
