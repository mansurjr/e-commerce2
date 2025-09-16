import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/authSlice";
import cart from "./features/cartSlice";
import data from "./features/dataSlice";
import liked from "./features/likeSlice";

export const store = configureStore({
  reducer: {
    auth,
    cart,
    data,
    liked,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
