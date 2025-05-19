import styled from "styled-components";
import heroLarge from "../../assets/hero-large.webp";
import heroMobile from "../../assets/hero-mobile.webp";

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url(${heroMobile});

  @media (min-width: 1024px) {
    
    background-image: url(${heroLarge});
  }
`;

export const HomeContent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #0a7510;
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
