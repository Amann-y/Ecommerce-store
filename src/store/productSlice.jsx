import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../commonutils/apiurl";

const initialState = {
  products: [],
  loading: false,
  productsingle: [],
  error: null,
};

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetch",
  async (limit) => {
    const res = await axios.get(`${BASE_URL}/products?limit=${limit}`);
    return res.data.products;
  }
);

export const fetchSingleProducts = createAsyncThunk(
  "products-single/fetch",
  async (id) => {
    const res = await axios.get(`${BASE_URL}/product/${id}`);
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncProducts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchAsyncProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchAsyncProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Fetch single product
    builder.addCase(fetchSingleProducts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchSingleProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.productsingle = action.payload;
    });

    builder.addCase(fetchSingleProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
