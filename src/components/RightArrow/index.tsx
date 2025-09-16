import { memo, type FC } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface IRightArrowParams {
  color?: string;
}

const RightArrow: FC<IRightArrowParams> = (params) => {
  const { color = "black" } = params;
  return (
    <div className="">
      <FaArrowRight color={color} />
    </div>
  );
};

export default memo(RightArrow);