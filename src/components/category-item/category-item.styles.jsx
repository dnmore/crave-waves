import styled from "styled-components";

export const CategoryContainer = styled.div`
min-width: 30%;
height: 240px;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;
overflow: hidden;


`;

export const CategoryImage = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit:cover
  }
`;

export const CategoryBody = styled.div`
  height: 100px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-family: "Bitter", serif;
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #2e2d2d;
  }
`;
