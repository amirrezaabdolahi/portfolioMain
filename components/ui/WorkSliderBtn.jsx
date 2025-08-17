import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtn = ({ containerStyle, buttonStyle, icnosStyle }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button className={buttonStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={icnosStyle} />
      </button>
      <button className={buttonStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={icnosStyle} />
      </button>
    </div>
  );
};

export default WorkSliderBtn;
