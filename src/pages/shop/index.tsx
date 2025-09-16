import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductView from "../../components/product-view/ProductView";
import type { IProduct } from "../../types";

const Shop = () => {
  const { data, loading, error } = useFetch<{ products: IProduct[] }>(
    "/products",
    {
      limit: 4,
    }
  );
  return (
    <div className="container">
      <h2>Shop</h2>
      <ProductView
        data={data?.products ?? []}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default memo(Shop);
