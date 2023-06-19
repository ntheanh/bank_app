import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[65px] h-[65px] ${styles.flexCenter} rounded-full bg-dimBlue `}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain " />
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[18px] text-white">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[13px] text-white text-dimWhite">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="feature" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;