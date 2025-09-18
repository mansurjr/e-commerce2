import { memo, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CircleUser,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import headerLogo from "../../../assets/header_svgs/3legant..svg";
import coupon from "../../../assets/header_svgs/ticket-percent.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../../../lib";
import { api } from "../../../api";
import { FaRegHeart } from "react-icons/fa6";

type SearchResult =
  | {
      id: number;
      title: string;
      category: string;
      thumbnail: string;
      type: "product";
    }
  | {
      id: string;
      title: string;
      type: "category";
    };

const Header = () => {
  const carts = useSelector((state: RootState) => state.cart.value);
  const liked = useSelector((state: RootState) => state.liked.value);
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#141718] font-semibold"
      : "text-[#6C7275] hover:text-[#141718] transition-colors duration-200 font-medium";

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // disable scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  // handle search debounce
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await api.get("/products/search", {
          params: { q: query, limit: 6 },
        });

        const products: SearchResult[] = (res.data.products || []).map(
          (p: any) => ({
            id: p.id,
            title: p.title,
            category: p.category,
            thumbnail: p.thumbnail,
            type: "product",
          })
        );

        const categories: any = Array.from(
          new Set(
            (res.data.products || []).map((p: any) => p.category as string)
          )
        ).map((cat) => ({
          id: cat,
          title: cat,
          type: "category",
        }));

        setResults([...categories, ...products]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  // Close search when clicking outside
  useEffect(() => {
    if (!isSearchOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleResultClick = (item: SearchResult) => {
    setIsSearchOpen(false);
    setQuery("");
    setResults([]);

    if (item.type === "category") {
      navigate(`/category/${item.id}`);
    } else if (item.type === "product") {
      navigate(`/product/${item.id}`);
    }
  };

  return (
    <>
      {isVisible && (
        <div className="bg-[#F3F5F7] border-b border-gray-200 px-4 py-3 w-full">
          <div className="flex items-center justify-center gap-3 text-[14px] leading-[22px] relative">
            <img src={coupon} alt="logo" />
            <span className="text-[#343839] font-medium">
              30% off storewide — Limited time!
            </span>
            <span className="ml-2 hidden md:inline-flex items-center cursor-pointer text-blue-600 font-medium underline">
              Shop now
              <ArrowRight className="ml-1 h-3 w-3" />
            </span>
            <button
              className="absolute right-4 p-1 hover:bg-gray-200 rounded"
              onClick={() => setIsVisible(false)}>
              <X className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      )}

      <nav className="w-full border-b border-[#F3F5F7] bg-background relative">
        <div className="mx-auto text-[14px] leading-[24px] container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-200 md:hidden"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu">
                <Menu className="h-5 w-5" />
              </button>
              <div
                className="flex-shrink-0 cursor-pointer"
                onClick={() => navigate("/")}>
                <img src={headerLogo} alt="elegant logo" />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center gap-10">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/shop" className={linkClass}>
                  Shop
                </NavLink>
                <NavLink to="/contact" className={linkClass}>
                  Contact Us
                </NavLink>
                <NavLink to="/blog" className={linkClass}>
                  Blog
                </NavLink>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  navigate("/liked");
                }}
                className="relative flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-200">
                <FaRegHeart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-medium">
                  {liked.length}
                </span>
              </button>
              <button
                className="hidden md:flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search className="h-5 w-5" />
              </button>

              <button
                className="hidden sm:flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                onClick={() => navigate("/account")}>
                <CircleUser className="h-5 w-5" />
              </button>

              <button
                onClick={() => {
                  navigate("/cart");
                }}
                className="relative flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-200">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-medium">
                  {carts.length}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* SEARCH DROPDOWN */}
        {isSearchOpen && (
          <div
            ref={searchRef}
            className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-md z-40">
            <div className="container py-4">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search products or categories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />

              {loading && (
                <p className="mt-2 text-sm text-gray-500">Searching...</p>
              )}

              {!loading && results.length > 0 && (
                <ul className="mt-2 space-y-2">
                  {results.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleResultClick(item)}
                      className="cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-md flex items-center gap-3">
                      {"thumbnail" in item && item.thumbnail && (
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-8 h-8 object-cover rounded"
                        />
                      )}
                      <span className="font-medium text-gray-800">
                        {item.title}
                      </span>
                      <span className="ml-2 text-xs text-gray-500">
                        ({item.type})
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {!loading && query && results.length === 0 && (
                <p className="mt-2 text-sm text-gray-500">No results found.</p>
              )}
            </div>
          </div>
        )}

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
            <div className="absolute inset-0" onClick={closeMobileMenu} />
          </div>
        )}

        <div
          className={`fixed top-0 left-0 w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } min-h-screen`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <img src={headerLogo} alt="elegant logo" className="h-8" />
              <button
                onClick={closeMobileMenu}
                className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close mobile menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 px-4 py-6">
              <div className="space-y-6">
                <NavLink
                  to="/"
                  className="block text-lg font-medium text-[#6C7275] hover:text-[#141718] transition-colors duration-200"
                  onClick={closeMobileMenu}>
                  Home
                </NavLink>
                <NavLink
                  to="/shop"
                  className="block text-lg font-medium text-[#6C7275] hover:text-[#141718] transition-colors duration-200"
                  onClick={closeMobileMenu}>
                  Shop
                </NavLink>
                <NavLink
                  to="/product"
                  className="block text-lg font-medium text-[#6C7275] hover:text-[#141718] transition-colors duration-200"
                  onClick={closeMobileMenu}>
                  Product
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block text-lg font-medium text-[#6C7275] hover:text-[#141718] transition-colors duration-200"
                  onClick={closeMobileMenu}>
                  Contact Us
                </NavLink>
                <NavLink
                  to="/blog"
                  className="block text-lg font-medium text-[#6C7275] hover:text-[#141718] transition-colors duration-200"
                  onClick={closeMobileMenu}>
                  Blog
                </NavLink>
                <NavLink
                  to="/account"
                  className="block text-lg font-medium text-[#6C7275] hover:text-[#141718] transition-colors duration-200"
                  onClick={closeMobileMenu}>
                  Account
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(Header);
