import styled from "styled-components";

export const ProductCardContainer = styled.div`
min-width: 40%;
height: 240px;
flex: 1 auto;
display: flex;
margin: 0 7.5px 15px;
overflow: hidden;
cursor:pointer;

`;
export const ProductImage = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  transition: transform 0.5s, opacity 1s;

  &:hover {
    transform: translateY(5px);
    opacity: 0.7;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  place-items: left;
  text-align: center;
  padding: 10px;
  position: absolute;
  width: 85px;
  background-color: #d08a08;
  


`;

export const Name = styled.span`
  text-transform: uppercase;
`;
export const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const ProductButton = styled.div`
  margin: 20px auto;
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid black;
  background-color: black;
  color: white;
  font: inherit;
  font-size: 10px;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  border-radius: 4px;

  &:hover {
    opacity: 0.75;
  }
`;
