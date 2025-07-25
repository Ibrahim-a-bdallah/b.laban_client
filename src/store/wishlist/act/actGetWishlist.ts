// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { RootState } from "@store/index";
// import { TProduct } from "@type/products.type";
// import axiosErrorHandler from "@utils/axiosErrorHandler";

// type TDataType = "productsFullInfo" | "ProductIds";
// type TResponse = TProduct[];

// const actGetWishlist = createAsyncThunk(
//   "wishlist/actGetWishlist",
//   async (dataType: TDataType, thunkAPI) => {
//     const { rejectWithValue, signal, getState } = thunkAPI;
//     const { auth } = getState() as RootState;
//     try {
//       const userWishlist = await axios.get<{ productId: number }[]>(
//         `/wishlist?userId=${auth.user?.id}`,
//         { signal }
//       );

//       if (!userWishlist.data.length) {
//         return { data: [], dataType: "empty" };
//       }

//       if (dataType === "ProductIds") {
//         const concatenatedItemsId = userWishlist.data.map((el) => el.productId);
//         return { data: concatenatedItemsId, dataType: "productsIds" };
//       } else {
//         const concatenatedItemsId = userWishlist.data
//           .map((el) => `_id=${el.productId}`)
//           .join("&");

//         const response = await axios.get<TResponse>(
//           `/products?${concatenatedItemsId}`
//         );
//         return { data: response.data, dataType: "ProductsFullInfo" };
//       }
//     } catch (error) {
//       return rejectWithValue(axiosErrorHandler(error));
//     }
//   }
// );

// export default actGetWishlist;
