import { motion } from "framer-motion";
import hero from "../../assets/crave-hero.png";

import { HeroContainer, HomeContent } from "./home.styles";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
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
    </motion.div>
  );
};

export default Home;
