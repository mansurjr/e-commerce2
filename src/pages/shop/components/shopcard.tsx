import {
  memo,
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
} from "react";
import { useFetch } from "../../../hooks/useFetch";
import ProductView from "../../../components/product-view/ProductView";
import type { IProduct } from "../../../types";
import { useNavigate, useLocation } from "react-router-dom";
import { FiGrid, FiSquare, FiColumns } from "react-icons/fi"; // Icons for grid view

const ShopCard = () => {
  const [order, setOrder] = useState<string>("id-asc");
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [gridType, setGridType] = useState<"2" | "3" | "4">("4");

  const limit = 8;
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category") || "";

  const { data: categories } = useFetch<string[]>("/products/category-list");

  const { data, loading, error } = useFetch<{
    products: IProduct[];
    total: number;
  }>(`/products/${categoryParam ? `category/${categoryParam}` : ""}`, {
    limit,
    skip,
    sortBy: order.split("-")[0],
    order: order.split("-")[1],
  });

  useEffect(() => {
    window.scrollTo(50, 50);
    if (data?.products) {
      setProducts((prev) =>
        skip === 0 ? data.products : [...prev, ...data.products]
      );
    }
  }, [data, skip]);

  const setDefaultValue = useCallback(() => {
    setProducts([]);
    setSkip(0);
  }, []);

  const handleChangeOrder = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
    setDefaultValue();
  };

  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    navigate(value ? `?category=${value}` : "");
    setDefaultValue();
  };

  return (
    <div>
      <div className="container flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <select
            className="border rounded-full px-3 py-1"
            value={order}
            onChange={handleChangeOrder}>
            <option value="id-asc">OmmaBop</option>
            <option value="rating-desc">Reyting</option>
            <option value="price-desc">Qimmat</option>
            <option value="price-asc">Arzon</option>
          </select>

          <select
            onChange={handleChangeCategory}
            value={categoryParam}
            className="border rounded-full px-3 py-1">
            <option value="">All</option>
            {categories?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Grid type buttons with icons */}
        <div className="flex gap-2">
          <button
            onClick={() => setGridType("4")}
            className={`p-2 rounded ${
              gridType === "4" ? "bg-black text-white" : "bg-gray-200"
            }`}>
            <FiGrid size={18} />
          </button>
          <button
            onClick={() => setGridType("3")}
            className={`p-2 rounded ${
              gridType === "3" ? "bg-black text-white" : "bg-gray-200"
            }`}>
            <FiColumns size={18} />
          </button>
          <button
            onClick={() => setGridType("2")}
            className={`p-2 rounded ${
              gridType === "2" ? "bg-black text-white" : "bg-gray-200"
            }`}>
            <FiSquare size={18} />
          </button>
        </div>
      </div>

      <ProductView
        data={products}
        loading={loading}
        error={error}
        gridType={gridType}
      />

      {loading && <div className="text-center text-5xl">Loading...</div>}

      {data?.total && data.total > skip + limit && (
        <div className="flex justify-center py-6">
          <button
            className="border rounded-full w-28"
            onClick={() => setSkip((p) => p + limit)}>
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(ShopCard);
