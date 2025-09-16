import { memo } from "react";
import footerLogo from "../../../assets/header_svgs/footer_logo.svg";
import { NavLink } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#141718] text-white py-12">
      <div className="container mx-auto px-4 mt-[80px]">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start mb-8 lg:mb-[50px]">
          <div className="mb-8 lg:mb-0">
            <div className="flex flex-col items-center lg:flex-row lg:items-center gap-2 lg:gap-4">
              <img src={footerLogo} alt="" />
              <div className="hidden lg:block h-6 w-px bg-gray-600"></div>
              <span className="text-gray-300 text-center lg:text-left">
                Gift & Decoration Store
              </span>
            </div>
          </div>
          <nav className="flex flex-col items-center gap-6 lg:flex-row lg:flex-wrap lg:gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/product"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Product
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-4">
            <div className="flex gap-4 order-1 lg:order-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:flex-wrap gap-4 lg:gap-6 text-sm text-gray-400 order-2 lg:order-1">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <span className="text-center lg:text-left">
                Copyright © 2023 3legant. All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
