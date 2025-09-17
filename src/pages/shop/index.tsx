import {
  memo,
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
} from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductView from "../../components/product-view/ProductView";
import type { IProduct } from "../../types";

import uchta from "../../assets/shop/3ta.svg";
import ikkita from "../../assets/shop/2ta.svg";
import { FaTableCellsLarge } from "react-icons/fa6";

const Shop = () => {
  const [order, setOrder] = useState<string>("id-asc");
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState("");
  const [gridType, setGridType] = useState<"2" | "3" | "4">("4");

  const limit = 4;

  const { data: categories } = useFetch<string[]>("/products/category-list");

  const { data, loading, error } = useFetch<{
    products: IProduct[];
    total: number;
  }>(`/products/${category}`, {
    limit,
    skip,
    sortBy: order.split("-")[0],
    order: order.split("-")[1],
  });

  useEffect(() => {
    if (data?.products) {
      setProducts((prev) => [...prev, ...data.products]);
    }
  }, [data]);

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
    setCategory(value ? `category/${value}` : value);
    setDefaultValue();
  };

  return (
    <div className="">
      <h2>Shop</h2>

      <div className="container flex justify-between">
        <div className="">
          <select className="border rounded-full" onChange={handleChangeOrder}>
            <option value="id-asc">OmmaBop</option>
            <option value="rating-desc">Reyting</option>
            <option value="price-desc">Qimmat</option>
            <option value="price-asc">Arzon</option>
          </select>

          <select
            onChange={handleChangeCategory}
            className="border rounded-full"
          >
            <option value="">All</option>
            {categories?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={() => setGridType("4")}>
            <FaTableCellsLarge size={40} />
          </button>
          <button onClick={() => setGridType("3")}>
            <img src={uchta} alt="" />
          </button>
          <button onClick={() => setGridType("2")}>
            <img src={ikkita} alt="" />
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
            onClick={() => setSkip((p) => p + limit)}
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(Shop);
