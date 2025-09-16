import { memo } from "react";
import blogHeroIMG from "../../../assets/blog/blogHero.png";

const BlogHero = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${blogHeroIMG})` }}>
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="relative text-center text-black px-4">
        <p className="text-sm text-gray-600 mb-2"> Home <span className="mx-1">›</span>{" "}<span className="font-medium">Blog</span>
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Blog</h1>
        <p className="text-gray-700 text-base md:text-lg">
          Home ideas and design inspiration
        </p>
      </div>
    </div>
  );
};

export default memo(BlogHero);
