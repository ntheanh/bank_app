import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row -flex-col ${styles.paddingY}`}
    >
      <div>
        <img src={discount} alt="discount" />
        <p>
          <span>20%</span>
          DISCOUNT FOR
          <span>1 MONTH</span>
          ACCOUNT
        </p>
      </div>
    </section>
  );
};

export default Hero;
