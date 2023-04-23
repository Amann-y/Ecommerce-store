import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../commonutils/apiurl";

const initialState = {
  userDetails: [],
  loading: false,
  userDetailsCart: [],
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state, action) => {
      state.userDetails = [];
      state.userDetailsCart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncUserDetails.pending, (state, action) => {
        state.loading = true;
      })

      .addCase(fetchAsyncUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.loading = false;
      })

      .addCase(fetchAsyncUserDetails.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(fetchAsyncUserCartDetails.pending, (state, action) => {
        state.loading = true;
      })

      .addCase(fetchAsyncUserCartDetails.fulfilled, (state, action) => {
        state.userDetailsCart = action.payload;
        state.loading = false;
      })

      .addCase(fetchAsyncUserCartDetails.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const fetchAsyncUserDetails = createAsyncThunk(
  "user-details/fetch",
  async (_userDetails) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_userDetails),
    });
    const data = await response.json();
    console.log("data", data);
    if (data && data.message && data.message === "Invalid credentials") {
      alert("You have enter wrong details", data.message);
    }
    return data;
  }
);

export const fetchAsyncUserCartDetails = createAsyncThunk(
  "user-cart-details/fetch",
  async (userid) => {
    const response = await fetch(`${BASE_URL}carts/user/${userid}`);
    const data = await response.json();
    return data.carts;
  }
);

export const { setUserDetails, clearUser } = userSlice.actions;
export const getUserDetails = (state) => state.user.userDetails;
export const getUserCartDetails = (state) => state.user.userDetailsCart;
export default userSlice.reducer;
