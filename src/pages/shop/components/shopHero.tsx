import { memo } from "react";
import shopHeroImg from "../../../assets/shop/shopHero.png";

const ShopHero = () => {
  return (
    <div
      className="w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${shopHeroImg})` }}>

      <div className="relative text-center text-black px-4">
        <p className="text-sm text-gray-600 mb-2">
          Home <span className="mx-1">›</span>
          <span className="font-medium">Shop</span>
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Shop page</h1>
        <p className="text-gray-700 text-base md:text-lg">
          Let's design the place you always imagined.
        </p>
      </div>
    </div>
  );
};

export default memo(ShopHero);
