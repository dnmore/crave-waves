import hero from "../../assets/crave-hero.webp";

import { HeroContainer, HomeContent } from "./home.styles";

const Home = () => {
  return (
    <>
    <HeroContainer>
      <picture>
        <source type="image/webp" media="max-width:540px">
        </source>
        <img loading="eager" decoding="async" src={hero} alt="hero with two sandwiches" />
      </picture>
      
      
    </HeroContainer>
    <HomeContent>
    <div>
      <h3>Explore Our Flavor Packed Menu</h3>
      <p>
        From juicy burgers to Tex-Mex delights, nachos, nuggets, and
        irresistible desserts, satisfy every craving today!
      </p>
    </div>
  </HomeContent>
  </>
  );
};

export default Home;
