import { addItemToCart } from "../../store/cart/cartSlice";
import { CategoryItem } from "../../types/definitions";

import {
  ProductCardContainer,
  ProductBody,
  ProductImage,
} from "./product-card.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useAppDispatch } from "../../store/hooks";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;
  const dispatch = useAppDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCardContainer>
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
