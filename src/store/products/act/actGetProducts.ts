import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@/types";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import axios from "axios";
import { baseUrl } from "@/utils";
type TRespons = TProduct[];

const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const respons = await axios.get<TRespons>(`${baseUrl}/products`, {
        signal,
      });

      return respons.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProducts;
