import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../lib";
import ProductView from "../../components/product-view/ProductView";

const Liked = () => {
  const wishlist = useSelector((state: RootState) => state.liked.value);

  return (
    <div className="container">
      {!wishlist.length ? (
        <div className="text-center">
          <img
            src="https://uzum.uz/static/img/hearts.cf414be.png"
            className="mx-auto"
            width={150}
            alt=""
          />
          <p>Empty</p>
        </div>
      ) : (
        <ProductView data={wishlist} loading={false} error={null} />
      )}
    </div>
  );
};

export default memo(Liked);
