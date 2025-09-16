import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types";

interface ProductsState {
  value: IProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  value: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.value = action.payload;
      state.loading = false;
      state.error = null;
    },

    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.value.push(action.payload);
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((p) => p.id !== action.payload);
    },

    clearProducts: (state) => {
      state.value = [];
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setProducts,
  addProduct,
  removeProduct,
  clearProducts,
  setLoading,
  setError,
} = productsSlice.actions;

export default productsSlice.reducer;
