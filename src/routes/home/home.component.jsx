import hero from "../../assets/crave-hero.webp";

import { HeroContainer } from "./home.styles";

const Home = () => {
  return (
    <HeroContainer>
      <picture>
        <source type="image/webp" media="max-width:540px">
        </source>
        <img loading="eager" decoding="async" src={hero} alt="hero with two sandwiches" />
      </picture>
      
    </HeroContainer>
  );
};

export default Home;
