import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ">
      <img src={quotes} alt="" />
    </div>
  );
};

export default FeedbackCard;
