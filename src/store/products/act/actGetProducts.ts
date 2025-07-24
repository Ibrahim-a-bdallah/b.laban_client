import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@/types";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import axios from "axios";
type TRespons = TProduct[];

const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const respons = await axios.get<TRespons>(
        "http://localhost:3001/products",
        {
          signal,
        }
      );

      return respons.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProducts;
