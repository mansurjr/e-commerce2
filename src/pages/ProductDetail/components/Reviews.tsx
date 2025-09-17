import { memo } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import type { Review } from "../../../types";

const Reviews = () => {
  const { id } = useParams();
  const { data } = useFetch<{ reviews: Review | any }>(`/products/${id}`);
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div>
          <h2 className="my-5 font-bold text-2xl">Customer Reviews</h2>
          <div className="flex gap-3">
            <p>3 Reviews</p>
          </div>
        </div>
        <p className="ml-20 my-2">Tray table</p>
        <div className="relative">
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 pr-[15%] w-[100%]"
          />
          <button className="bg-black rounded-full text-white px-8 absolute right-5 top-1.5 py-1 ">
            write Review
          </button>
        </div>
        <div>
          <div className="flex items-center justify-between my-3">
            <strong>11 Reviews</strong>
            <select
              id="sort"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
          {/* Coment */}
            Reviews
            <div>
              {data?.reviews?.map((item: any,index:number) => (
                <div key={index}>
                    <div className="flex gap-5">
                      <div className="">
                        <p className="border rounded-full p-2">User</p>
                      </div>
                      <div>
                        <h3>{item.reviewerName}</h3>
                        <p>{item.rating}</p>
                        <p>{item.comment}</p>
                        <div className="flex ml-10 gap-5">
                          <button>Like</button>
                          <button>Reply</button>
                        </div>
                      </div>
                    </div>
                    <hr className="my-2" />
                </div>
              ))}
            </div>
        </div>

        <div className="my-3">
          <button className="border-2 rounded-full px-5 flex mx-auto">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Reviews);
