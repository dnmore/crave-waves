import { useContext, Fragment } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import { MenuContainer, MenuTitle } from "./menu.styles";

const Menu = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <MenuTitle>
            {title}
          </MenuTitle>

          <MenuContainer>
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </MenuContainer>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Menu;
