import { memo } from "react";
import { Link } from "react-router-dom";
import notFoundimage from "../../assets/notfound.jpg";

const NotFound = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${notFoundimage})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 " />

      <div className="relative z-10 max-w-xl px-30 mx">
        <h1 className="text-9xl font-bold flex items-center gap-2">4<span>😞</span>4</h1>
        <h2 className="text-4xl font-semibold mt-4">Oops, Page not found!</h2>
        <p className="text-gray-600 mt-2">Sorry, we&apos;re offline right now to make our site even better.Please, come back later and check what we&apos;ve been up to.
        </p>
        <Link to="/" className="inline-block mt-6 text-black font-medium hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default memo(NotFound);
