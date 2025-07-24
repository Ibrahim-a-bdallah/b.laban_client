import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@/types/categories.type";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import axios from "axios";

type TRespons = TCategory[];

const actGetcategories = createAsyncThunk(
  "categories/actGetcategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const respons = await axios.get<TRespons>(
        "http://localhost:3001/categories",
        { signal }
      );
      return respons.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetcategories;
