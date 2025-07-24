import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TLoading, isString } from "@/types";
import actGetproducts from "./act/actGetProducts";

interface IProductsState {
  products: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProductsState = {
  products: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanupProductRecords: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetproducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetproducts.fulfilled, (state, action) => {
      state.loading = "fulfilled";

      state.products = action.payload;
    });
    builder.addCase(actGetproducts.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanupProductRecords } = productsSlice.actions;
export { actGetproducts };
export default productsSlice.reducer;
