import { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../lib";
import {
  clearCart,
  decreaseAmount,
  increaseAmount,
  removeFromCart,
  type ICartProduct,
} from "../../lib/features/cartSlice";

const Cart = () => {
  const carts = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const total = useMemo(() => {
    return carts.reduce(
      (sum: number, item: ICartProduct) => sum + item.price! * item.quantity,
      0
    );
  }, [carts]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-medium text-center my-6 sm:my-12">
        Cart
      </h3>

      {carts.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 overflow-x-auto">
            <table className="w-full border-t border-gray-200 text-sm sm:text-base">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-3 px-2 sm:px-4">Product</th>
                  <th className="py-3 px-2 sm:px-4">Quantity</th>
                  <th className="py-3 px-2 sm:px-4">Price</th>
                  <th className="py-3 px-2 sm:px-4">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {carts.map((item: ICartProduct) => (
                  <tr key={item.id} className="align-middle">
                    <td className="py-4 px-2 sm:px-4 flex items-center gap-3 sm:gap-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg bg-[#F3F5F7]"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800 line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Stock: {item.stock}
                        </p>
                        <button
                          className="mt-1 text-xs sm:text-sm text-[#6C7275] hover:underline"
                          onClick={() => dispatch(removeFromCart(item))}>
                          ✖ Remove
                        </button>
                      </div>
                    </td>

                    <td className="px-2 sm:px-4 py-2">
                      <div className="flex items-center border rounded-md w-fit">
                        <button
                          disabled={item.quantity <= 1}
                          onClick={() => dispatch(decreaseAmount(item))}
                          className="px-2 sm:px-3 py-1 disabled:opacity-30 hover:bg-gray-100">
                          -
                        </button>
                        <span className="px-3 sm:px-4">{item.quantity}</span>
                        <button
                          disabled={item.quantity >= item.stock!}
                          onClick={() => dispatch(increaseAmount(item))}
                          className="px-2 sm:px-3 py-1 disabled:opacity-30 hover:bg-gray-100">
                          +
                        </button>
                      </div>
                    </td>

                    <td className="px-2 sm:px-4 text-gray-700 font-medium">
                      ${item.price!.toFixed(2)}
                    </td>
                    <td className="px-2 sm:px-4 font-bold text-gray-900">
                      ${(item.price! * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white shadow rounded-xl p-4 sm:p-6 h-fit border">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
              Cart summary
            </h2>

            <div className="space-y-2 text-sm sm:text-base text-gray-600">
              <p className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">
                  ${total.toFixed(2)}
                </span>
              </p>
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between text-base sm:text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => dispatch(clearCart())}
              className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-2 sm:py-3 rounded-lg transition">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <img
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            width={150}
            alt="Empty cart"
            className="mb-4"
          />
          <p className="text-gray-500 text-sm sm:text-base">
            Your cart is empty
          </p>
        </div>
      )}
    </div>
  );
};

export default memo(Cart);
