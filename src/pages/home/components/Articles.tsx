import { memo } from "react";

import { articles } from "../../../static";
import RightArrow from "../../../components/RightArrow";
import UnderlineLink from "../../../components/Underline";

const ArticlesView = () => {
  return (
    <section>
      <div className="container w-full py-20 px-8">
        <div className="mb-10">
          <h3 className="font-[500] text-3xl">Articles</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              href={article.link}
              key={article.id}
              className="w-full flex flex-col overflow-hidden">
              <div className="w-full h-[325px] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition"
                />
              </div>

              <div className="py-6 flex flex-col gap-3 flex-1">
                <h5 className="text-lg font-semibold text-[#121212] line-clamp-2">
                  {article.title}
                </h5>
                <UnderlineLink>
                  <div className="flex items-center gap-2 ">
                    <span>Read More</span>
                    <RightArrow />
                  </div>
                </UnderlineLink>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ArticlesView);
