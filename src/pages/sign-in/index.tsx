import { memo, useState, type FormEvent } from "react";
import leftPng from "../../assets/login_pic/Left.png";
import logo from "../../assets/header_svgs/3legant..svg";
import phoneImg from "../../assets/login_pic/Image Placeholder.png";

import { api } from "../../api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setToken } from "../../lib/features/authSlice";
import { useNavigate } from "react-router-dom";
import { Eye, EyeClosed } from "lucide-react";

const SignIn = () => {
  const [username, setUsername] = useState(""); //"emilys";
  const [password, setPassword] = useState(""); //"emilyspass";
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const body = { username, password };
    api
      .post("/auth/login", body)
      .then((res) => {
        toast.success("Welcome");
        dispatch(setToken(res.data.accessToken));
        navigate("/account");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => setLoading(false));
  };

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row bg-[#FEFEFE] min-h-screen">
      <div className="relative lg:hidden w-full min-h-[430px]">
        <img
          src={phoneImg}
          alt="phone layout background"
          className="w-full h-full object-cover"
        />
        <img
          src={logo}
          alt="logo"
          className="absolute top-8 left-1/2 -translate-x-1/2 w-[120px]"
        />
      </div>

      <div className="hidden lg:block flex-shrink-0">
        <img
          src={leftPng}
          alt="this is a pic of a couch"
          className="object-cover max-h-screen"
        />
      </div>

      <div className="flex-1 flex items-start justify-center lg:justify-start px-6 sm:px-10 lg:pl-[300px] lg:pt-[220px] lg:pr-[160px]">
        <div className="w-full max-w-[456px]">
          <h1 className="text-[#141718] font-medium text-[32px] sm:text-[36px] lg:text-[40px] leading-[44px] tracking-[-0.4px] mb-6">
            Sign In
          </h1>

          <p className="font-normal text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] mb-8">
            {"Don't have an account yet? "}
            <span className="text-[#38CB89] cursor-pointer font-normal">
              Sign Up
            </span>
          </p>

          <form className="space-y-0 w-full" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your username or email address"
                className="w-full bg-transparent border-0 border-b border-[#E8ECEF] pb-2 font-normal text-[16px] leading-[26px] focus:outline-none focus:border-[#141718]"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-8 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-transparent border-0 border-b border-[#E8ECEF] pb-2 pr-10 font-normal text-[16px] leading-[26px] focus:outline-none focus:border-[#141718]"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 p-1"
              >
                {showPassword ? (
                  <Eye className="text-[#6C7275]" />
                ) : (
                  <EyeClosed className="text-[#6C7275]" />
                )}
              </button>
            </div>

            <div className="flex justify-between items-center mb-8">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`flex items-center justify-center w-6 h-6 rounded border border-[#E8ECEF] ${
                    rememberMe ? "bg-[#141718]" : "bg-transparent"
                  }`}
                >
                  {rememberMe && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span className="ml-2 font-normal text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#6B7280]">
                  Remember me
                </span>
              </label>

              <a
                href="#"
                className="text-[#141718] font-semibold text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px]"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full h-12 rounded-lg px-10 text-center text-white font-medium text-[16px] leading-[28px] tracking-[-0.4px] 
              ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#141718]"}`}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(SignIn);
