import { useEffect, Fragment } from "react";


import ProductCard from "../../components/product-card/product-card.component";

import {MenuContainer, MenuSection, MenuTitle } from "./menu.styles";
import { fetchCategoriesAsync } from "../../store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Menu = () => {
  
  const dispatch = useAppDispatch()
  const categoriesMap = useAppSelector((state) => state.categories.categoriesMap)

  useEffect(() => {
    dispatch(fetchCategoriesAsync())
  }, [dispatch])

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
