import styled from "styled-components";

export const ProductCardContainer = styled.div`
  min-width: 40%;
  height: 240px;
  flex: 1 auto;
  display: flex;
  margin: 0 7.5px 15px;
  overflow: hidden;
  cursor: pointer;
  transition: opacity 1s;

  &:hover {
    opacity: 0.8;
  }
`;
export const ProductImage = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;

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
  transition: transform 0.5s;

  &:hover {
    transform: translateY(10px);
  }
`;

export const Name = styled.span`
  text-transform: uppercase;
  font-size: 16px;
`;
export const Price = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const ProductButton = styled.button`
  padding: 5px 10px;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid black;
  background-color: black;
  color: white;
  font: inherit;
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
`;
