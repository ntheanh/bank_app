import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row -flex-col ${styles.paddingY}`}
    >
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>

      <div>{/* <img src={robot} alt="" /> */}</div>
    </section>
  );
};

export default Hero;
