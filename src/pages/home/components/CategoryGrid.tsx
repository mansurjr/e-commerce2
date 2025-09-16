import { memo } from "react";
import grt1 from "../../../assets/grit01.png";
import grt2 from "../../../assets/grit02.png";
import grt3 from "../../../assets/grit03.png";

const CategoryGrid = () => {
  return (
    <section className="mb-12">
    <div className="container">
      <div className="flex justify-between py-4">
        <div>
          <h5 className="font-medium text-[60px]">
            Simply Unique / <br /> Simply Better.
          </h5>
        </div>
        <div className="flex items-center justify-center max-w-md">
          <p>
            3legant is a gift & decorations store based in HCMC,
            <br /> Vietnam. Est since 2019.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="relative">
          <img src={grt1} alt="Living Room" />
          <div className="absolute top-6 left-6">
            <h3 className="text-2xl font-semibold">Living Room</h3>
            <a href="#" className="flex items-center gap-2 underline">
              Shop Now →
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative">
            <img src={grt2} alt="Bedroom" />
            <div className="absolute top-6 left-6">
              <h3 className="text-2xl font-semibold">Bedroom</h3>
              <a href="#" className="flex items-center gap-2 underline">
                Shop Now →
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={grt3} alt="Kitchen" />
            <div className="absolute top-6 left-6">
              <h3 className="text-2xl font-semibold">Kitchen</h3>
              <a href="#" className="flex items-center gap-2 underline">
                Shop Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default memo(CategoryGrid);
