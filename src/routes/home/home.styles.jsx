import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  padding: 4rem 0;
  height: 50vh;

  @media (min-width: 1024px) {
   
    height: 100vh;
  }
  
  

   img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
`;

export const HomeContent = styled.div`
height: 50vh;
  width: 100%;
   background-color: #4caf50;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  display: grid;
  place-items: center;

  @media (min-width: 1024px) {
   height: 100vh;
    padding: 4rem 6rem;
  }
  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    margin-bottom: 10px;
    @media (min-width: 768px) {
      font-size: 45px;
    }
  }
  p {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 35px;
  }
`;

