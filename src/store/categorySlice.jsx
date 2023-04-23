import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../commonutils/apiurl";

const initialState = {
  categories: [],
  loading: false,
  categoryproduct: [],
  error: null,
};

export const fetchAsyncCategories = createAsyncThunk(
  "category/fetch",
  async () => {
    const res = await axios.get(`${BASE_URL}/products/categories`);
    return res.data;
  }
);

export const fetchCategoryProducts = createAsyncThunk(
  "category-products/fetch",
  async (category) => {
    const res = await axios.get(`${BASE_URL}/product/category/${category}`);
    return res.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCategories.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchAsyncCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });

    builder.addCase(fetchAsyncCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Fetch single product
    builder.addCase(fetchCategoryProducts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryproduct = action.payload;
    });

    builder.addCase(fetchCategoryProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default categorySlice.reducer;
