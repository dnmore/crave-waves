import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/product-card.component";

import './menu.styles.scss'

const Menu = () => {
    const { products} = useContext(ProductsContext)
  return (
    <div className="menu-container">
      {products.map((product) => (
        <ProductCard key={product.id}product={product} />
      ))}
    </div>
  );
};

export default Menu;
