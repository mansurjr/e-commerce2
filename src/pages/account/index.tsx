import { memo, useEffect, useState } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { removeToken } from "../../lib/features/authSlice";
import { NavLink, Outlet } from "react-router-dom";

const Account = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(removeToken());
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    api
      .get("/auth/me")
      .then((res) => setUser(res.data))
      .catch((err) => {
        const msg = err?.response?.data?.message ?? "Failed to load profile";
        setError(msg);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  // skeleton section
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto pb-8 px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-[262px] lg:h-[490px] self-start">
              <div className="bg-[#F3F5F7] rounded-lg h-full p-6 flex flex-col items-center">
                <div className="w-[82px] h-[82px] bg-gray-300 rounded-full mb-6"></div>

                <div className="h-6 w-40 bg-gray-300 rounded mb-10"></div>

                <div className="space-y-4 w-full">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="h-5 w-3/4 bg-gray-300 rounded mx-auto"
                      ></div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex-1 lg:mr-[79px]">
              <div className="space-y-8">
                <div>
                  <div className="p-4 space-y-4 text-left">
                    {/* title */}
                    <div className="text-left py-8">
                      <div className="h-8 w-48 bg-gray-300 rounded-lg "></div>
                    </div>

                    {Array(7)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="py-[7px] px-[16px]">
                          <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
                          <div className="h-6 w-64 bg-gray-200 rounded"></div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto pb-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start  ">
          <div className="w-full lg:w-[262px] lg:h-[490px] self-start ">
            <div className="bg-muted rounded-lg h-full bg-[#F3F5F7]">
              <div className="text-center">
                <div className="relative inline-block mt-[40px]">
                  <div className="rounded-full bg-amber-400">
                    <img
                      src={user.image}
                      width={82}
                      height={82}
                      alt="Sofia Havertz"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h2 className="text-[18px] md:text-[20px] leading-[32px] font-semibold text-foreground mb-[40px]">
                  {user.firstName} {user.lastName}
                </h2>
              </div>

              <nav className="w-full lg:w-[230px] px-[16px]">
                {/* mobile section start */}
                <div className="lg:hidden">
                  <button
                    onClick={toggleNav}
                    className="flex items-center justify-between w-full text-left mt-[12px] font-semibold text-[16px] leading-[26px] py-[8px] text-[#141718] border-b border-[#141718]"
                  >
                    See more
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isNavOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/*  menu items */}
                  {isNavOpen && (
                    <div className="pl-4 border-l-2 border-gray-200 ml-2">
                      <NavLink
                        to="."
                        className={({ isActive }) =>
                          `block w-full text-left mt-[12px] font-semibold text-[16px] leading-[26px] py-[8px] border-b border-[#E8ECEF] transition-colors ${
                            isActive
                              ? "text-[#141718] border-b-2 border-[#141718]"
                              : "text-[#6C7275] hover:text-[#141718] hover:border-b-2 hover:border-[#141718]"
                          }`
                        }
                      >
                        Account
                      </NavLink>
                      <NavLink
                        to="cart"
                        className={({ isActive }) =>
                          `block w-full text-left mt-[12px] font-semibold text-[16px] leading-[26px] py-[8px] border-b border-[#E8ECEF] transition-colors ${
                            isActive
                              ? "text-[#141718] border-b-2 border-[#141718]"
                              : "text-[#6C7275] hover:text-[#141718] hover:border-b-2 hover:border-[#141718]"
                          }`
                        }
                      >
                        Cart
                      </NavLink>
                      <NavLink
                        to="liked"
                        className={({ isActive }) =>
                          `block w-full text-left mt-[12px] font-semibold text-[16px] leading-[26px] py-[8px] border-b border-[#E8ECEF] transition-colors ${
                            isActive
                              ? "text-[#141718] border-b-2 border-[#141718]"
                              : "text-[#6C7275] hover:text-[#141718] hover:border-b-2 hover:border-[#141718]"
                          }`
                        }
                      >
                        Liked
                      </NavLink>
                      <button
                        onClick={handleLogOut}
                        className="block w-full text-left mt-[12px] font-semibold text-[16px] leading-[26px] py-[8px] text-[#6C7275] hover:text-foreground transition-colors"
                      >
                        Log Out
                      </button>
                    </div>
                  )}
                </div>

                {/* Desktop section start*/}
                <div className="hidden lg:block">
                  <NavLink
                    to="."
                    className={({ isActive }) =>
                      `block w-full text-left mt-[12px] font-semibold text-[16px] leading-[26px] py-[8px] border-b border-[#E8ECEF] transition-colors ${
                        isActive
                          ? "text-[#141718] border-b-2 border-[#141718]"
                          : "text-[#6C7275] hover:text-[#141718] hover:border-b-2 hover:border-[#141718]"
                      }`
                    }
                  >
                    Account
                  </NavLink>
                  <NavLink
                    to="cart"
                    className={({ isActive }) =>
                      `block w-full text-left mt-[12px] font-semibold text-[16px] leading-[26px] py-[8px] border-b border-[#E8ECEF] transition-colors ${
                        isActive
                          ? "text-[#141718] border-b-2 border-[#141718]"
                          : "text-[#6C7275] hover:text-[#141718] hover:border-b-2 hover:border-[#141718]"
                      }`
                    }
                  >
                    Cart
                  </NavLink>

                  <NavLink
                    to="liked"
                    className={({ isActive }) =>
                      `block w-full text-left mt-[12px] font-semibold text-[16px] leading-[26px] py-[8px] border-b border-[#E8ECEF] transition-colors ${
                        isActive
                          ? "text-[#141718] border-b-2 border-[#141718]"
                          : "text-[#6C7275] hover:text-[#141718] hover:border-b-2 hover:border-[#141718]"
                      }`
                    }
                  >
                    Wishlist
                  </NavLink>

                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left mt-[12px] font-semibold text-[16px] leading-[26px] py-[8px] border-b border-[#E8ECEF] text-[#6C7275] hover:text-[#141718] hover:border-b-2 hover:border-[#141718] transition-colors"
                  >
                    Log Out
                  </button>
                </div>
              </nav>
            </div>
          </div>

          <div className="!p-0">
            {/* <Link to={"."}>Pfp</Link>
            <Link to={"cart"}>aa</Link>
            <Link to={"liked"}>aaq</Link> */}

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Account);
