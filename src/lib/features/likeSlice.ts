import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types";

export type ILikeProduct = IProduct & {
  liked: boolean;
};

interface ILiked {
  value: ILikeProduct[];
}

const initialState: ILiked = {
  value: JSON.parse(localStorage.getItem("liked") || "[]") || [],
};

export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addToLiked: (state, action: PayloadAction<IProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.value.push({ ...action.payload, liked: true });
      }
      localStorage.setItem("liked", JSON.stringify(state.value));
    },

    removeFromLiked: (state, action: PayloadAction<IProduct>) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("liked", JSON.stringify(state.value));
    },

    toggleLiked: (state, action: PayloadAction<IProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.value.push({ ...action.payload, liked: true });
      }
      localStorage.setItem("liked", JSON.stringify(state.value));
    },

    clearLiked: (state) => {
      state.value = [];
      localStorage.setItem("liked", JSON.stringify(state.value));
    },
  },
});

export const { addToLiked, removeFromLiked, toggleLiked, clearLiked } =
  likedSlice.actions;

export default likedSlice.reducer;
