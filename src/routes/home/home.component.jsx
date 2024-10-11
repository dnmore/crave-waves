import hero from "../../assets/crave-hero.png";

import { HeroContainer, HomeContent } from "./home.styles";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
