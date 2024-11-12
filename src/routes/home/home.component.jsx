

import hero from "../../assets/crave-hero.webp";

import { HeroContainer, HomeContent } from "./home.styles";

const Home = () => {
  return (
    <div>
      <HeroContainer
        style={{ backgroundImage: `url(${hero})` }}
      ></HeroContainer>
      <HomeContent>
        <div>
          <h3>Explore Our Flavor Packed Menu</h3>
          <p>
            From juicy burgers to Tex-Mex delights, nachos, nuggets, and
            irresistible desserts, satisfy every craving today!
          </p>
        </div>
      </HomeContent>
    </div>
  );
};

export default Home;