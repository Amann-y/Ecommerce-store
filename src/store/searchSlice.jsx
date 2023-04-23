import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../commonutils/apiurl";

const initialState = {
  searchProducts: [],
  searchProductsStatus: null,
  loading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state, action) => {
      state.searchProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncSearchProduct.pending, (state, action) => {
        state.loading = true;
      })

      .addCase(fetchAsyncSearchProduct.fulfilled, (state, action) => {
        state.searchProducts = action.payload;
        state.loading = false;
      })

      .addCase(fetchAsyncSearchProduct.rejected, (state, action) => {
        state.searchProductsStatus = action.payload;
      });
  },
});

export const fetchAsyncSearchProduct = createAsyncThunk(
  "product-search/fetch",
  async (searchTerm) => {
    const response = await fetch(`${BASE_URL}/products/search?q=${searchTerm}`);
    const data = await response.json();
    return data.products;
  }
);

export const { setSearchTerm, clearSearch } = searchSlice.actions;
export const getSearchProducts = (state) => state.search.searchProducts;
export const getSearchProductsStatus = (state) =>
  state.search.searchProductsStatus;
export default searchSlice.reducer;
