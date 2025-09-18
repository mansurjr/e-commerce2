import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseAmount,
  increaseAmount,
  type ICartProduct,
} from "../../../lib/features/cartSlice";
import {
  toggleLiked,
  type ILikeProduct,
} from "../../../lib/features/likeSlice";
import type { RootState } from "../../../lib";
import { api } from "../../../api";
import Loading from "./Loading";

export default function ProductPage() {
  const dispatch = useDispatch();
  const carts = useSelector((state: RootState) => state.cart.value);
  const wishlist = useSelector((state: RootState) => state.liked.value);

  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<ILikeProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [color, setColor] = useState("black");
  const colorOptions = [
    { id: "black", color: "bg-black" },
    { id: "beige", color: "bg-gray-300" },
    { id: "red", color: "bg-red-500" },
    { id: "yellow", color: "bg-yellow-500 border" },
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        window.scrollTo(0, 0);
        setLoading(true);
        const res = await api.get<ILikeProduct>(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return null;

  const cartItem = carts.find((c: ICartProduct) => c.id === product.id);
  const quantity = cartItem?.quantity ?? 0;

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* LEFT SIDE */}
      <div>
        <div className="relative">
          <div className="flex gap-2">
            <p className="text-sm text-gray-500 mb-2 hover:cursor-pointer">
              Home {"> "}
            </p>
            <p className="text-sm text-gray-500 mb-2 hover:cursor-pointer">
              Shop {"> "}
            </p>
            <p className="text-sm text-gray-500 mb-2 hover:cursor-pointer">
              {product.category} {"> "}
            </p>
            <p className="text-sm text-gray-500 mb-2 hover:cursor-pointer">
              {product.title}
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md transition-shadow duration-300 hover:shadow-2xl hover:cursor-pointer"
            />
          </div>

          <button className="absolute top-1/2 left-2 bg-white rounded-full p-2 shadow">
            <FaChevronLeft />
          </button>
          <button className="absolute top-1/2 right-2 bg-white rounded-full p-2 shadow">
            <FaChevronRight />
          </button>
        </div>

        <div className="flex gap-3.5 mt-4 w-[167px]">
          {product.images?.map((item, inx) => (
            <img
              key={inx}
              src={item}
              alt={product.title}
              className="rounded-lg transition-shadow duration-300 hover:shadow-2xl hover:cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <span className="text-red-400 text-[10px] mb-2">
          {product.discountPercentage}% discount
        </span>

        <div className="flex items-center gap-3">
          <span className="line-through text-gray-400">${product.price}</span>
          <span className="text-2xl font-bold text-gray-900">
            $
            {(
              product.price! -
              (product.price! * product.discountPercentage!) / 100
            ).toFixed(2)}
          </span>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Choose Color</p>
          <div className="flex gap-3">
            {colorOptions.map((c) => (
              <button
                key={c.id}
                onClick={() => setColor(c.id)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center hover:cursor-pointer ${
                  color === c.id ? "ring-2 ring-black" : ""
                }`}>
                <span className={`w-6 h-6 rounded-full ${c.color}`}></span>
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            In stock: {product.stock}
          </p>
        </div>

        <div className="flex items-center gap-3 mt-4">
          {cartItem && (
            <div className="flex items-center border rounded-md w-fit">
              <button
                disabled={quantity <= 1}
                onClick={() => cartItem && dispatch(decreaseAmount(cartItem))}
                className="px-3 py-1 disabled:opacity-30 hover:bg-gray-100">
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => cartItem && dispatch(increaseAmount(cartItem))}
                className="px-3 py-1 hover:bg-gray-100">
                +
              </button>
            </div>
          )}

          <button
            onClick={() => dispatch(toggleLiked(product))}
            className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:cursor-pointer">
            {wishlist.some((pro) => pro.id === product.id) ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
            Wishlist
          </button>
        </div>

        {!cartItem && (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="w-full bg-black text-white py-3 rounded-lg font-medium mt-4 hover:cursor-pointer">
            Add to Cart
          </button>
        )}

        <div className="text-sm text-gray-500 mt-3">
          <p>SKU: {product.sku || "N/A"}</p>
          <p>Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
}
