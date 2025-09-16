import { memo } from "react";
import ProductDetailView from "./components/ProductDetailView";

const ProductDetail = () => {
  return (
    <div className="ProductDetail">
      <ProductDetailView />
    </div>
  );
};

export default memo(ProductDetail);
