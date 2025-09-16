import { memo } from "react";
import image from "../../../assets/Image Placeholder.png";
import RightArrow from "../../../components/RightArrow";
import UnderlineLink from "../../../components/Underline";

const SaleUp = () => {
  return (
    <section className="bg-py">
      <div className="flex lg:flex-row lg:items-center lg:gap-18 mx-auto px-4 md:px-8 lg:px-16">
        <div className="w-full lg:w-1/2">
          <img
            src={image}
            alt="imgwe"
            className="w-full h-[250px] sm:h-[350px] lg:h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 py-8 lg:py-35 text-left">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[14px] sm:text-[16px] leading-[16px] uppercase text-[#377DFF]">
              SALE UP TO 35% OFF
            </p>
            <h4 className="font-medium text-2xl sm:text-3xl lg:text-[40px] leading-snug lg:leading-[44px] tracking-[-0.4px] max-w-[28rem]">
              HUNDREDS of <br />
              New lower prices!
            </h4>
            <p className="max-w-[28rem] font-normal text-base sm:text-lg lg:text-xl leading-7 lg:leading-8 text-gray-700">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
          </div>
          <UnderlineLink>
            <div className="inline-flex items-center gap-2 cursor-pointer">
              <span className="text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] tracking-[-0.4px]">
                Shop Now
              </span>
              <RightArrow />
            </div>
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
};

export default memo(SaleUp);
