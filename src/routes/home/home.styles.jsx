import styled from "styled-components";


export const HeroContainer = styled.div`
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;

  @media (min-width: 768px) {
    height: 100vh;
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

  @media (min-width: 768px) {
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
