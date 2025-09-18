import { useSelector } from "react-redux";
import type { RootState } from "../../../lib";
import ProductView from "../../../components/product-view/ProductView";

const AccLiked = () => {
  const wishlist = useSelector((state: RootState) => state.liked.value);

  return (
    <div className="">
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
        <ProductView
          data={wishlist}
          loading={false}
          error={null}
          className="p-0"
        />
      )}
    </div>
  );
};

export default AccLiked;
