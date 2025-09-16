import { memo } from "react";
import aboutImage from "../../../assets/contactUs/contact-aboutAs.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center bg-gray-50 py-8">
      <div className="w-full md:w-1/2">
        <img src={aboutImage} alt="About us" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          3legant is a gift & decorations store based in HCMC, Vietnam. <br />
          Est since 2019.
          <br />
          Our customer service is always prepared to support you 24/7
        </p>
        <a href="#" className="inline-flex items-center text-lg font-medium text-gray-900 border-b border-gray-900 w-fit">Shop Now →</a>
      </div>
    </div>
  );
};

export default memo(AboutUs);
