import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductView from "../../components/product-view/ProductView";
import type { IProduct } from "../../types";
import SwiperCor from "./components/SwiperCor";
import CategoryGrid from "./components/CategoryGrid";
import Services from "../../components/Service/Services";
import Articles from "./components/Articles";
import SaleUp from "./components/SaleUp";
import Skeleton from "../../components/Skeleton";

const Home = () => {
  const { data, loading, error } = useFetch<{ products: IProduct[] }>(
    "/products",
    {
      limit: 4,
    }
  );

  return (
    <div className="">
    <div>
      <h2>Home</h2>
      <SwiperCor />
      <CategoryGrid />
      <ProductView
        data={data?.products ?? []}
        loading={loading}
        error={error}
        skeleton={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        }
      />
      <Services />
      <SaleUp />
      <Articles />
    </div>
  );
};

export default memo(Home);
