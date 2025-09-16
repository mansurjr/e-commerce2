import { useState } from "react";
import { Mail } from "lucide-react";

import NewsLetterImg from "../../../assets/Newsletter.png";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };
  return (
    <div
      className="w-full bg-cover bg-center py-16 flex items-center justify-center min-h-[360px]"
      style={{ backgroundImage: `url(${NewsLetterImg})` }}
    >
      <div className="w-full max-w-[540px] bg-gray-100 p-8 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-[40px] leading-[44px] tracking-[-0.4px]  text-[#141718] mb-2 font-[500]">
            Join Our Newsletter
          </h2>
          <p className="text-gray-600 text-[18px] leading-[30px] font-[400]">
            Sign up for deals, new products and promotions
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-0 bg-[#F2F4F6]  border-b border-gray-200 p-1 mt-[32px]"
        >
          <div className="flex items-center flex-1 px-3">
            <Mail className="h-5 w-5 text-black mr-3" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className=" bg-[#F2F4F6] text-[#6C7275] px-6 py-2 rounded-sm"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
