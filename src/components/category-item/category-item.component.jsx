

import { CategoryContainer, CategoryBody, CategoryImage } from "./category-item.styles";
const CategoryItem = ({ category }) => {
  const { imageUrl, title, name } = category;
 
  return (
    <CategoryContainer>
      <CategoryImage >
      <img src={imageUrl} alt={`${name}`} />
      </CategoryImage>
      <CategoryBody>
        <h2>{title}</h2>

       
      </CategoryBody>
    </CategoryContainer>
  );
};

export default CategoryItem;
