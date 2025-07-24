import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store/index";
import axios from "axios";
import { TProduct } from "@/types";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { baseUrl } from "@/utils";

type TResponse = TProduct[];

const actGetItems = createAsyncThunk(
  "cart/actGetItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue, signal } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemId = Object.keys(cart.items);
    if (!itemId.length) {
      return fulfillWithValue([]);
    }
    try {
      const prifixIds = itemId.map((el) => `_id=${el}`).join("&");
      console.log(`${baseUrl}/products?${prifixIds}`);
      const response = await axios.get<TResponse>(
        `http://localhost:3001/products?${prifixIds}`,
        {
          signal,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetItems;
