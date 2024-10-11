import { useContext, Fragment } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import {MenuContainer, MenuSection, MenuTitle } from "./menu.styles";

const Menu = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <MenuContainer>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <MenuTitle>
            {title}
          </MenuTitle>

          <MenuSection>
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </MenuSection>
        </Fragment>
      ))}
    </MenuContainer>
  );
};

export default Menu;
