import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../store/productSlice";
import categoryReducer from "../store/categorySlice";
import cartReducer from "../store/cartSlice";
import searchReducer from "../store/searchSlice";
import userReducer from "../store/userSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    search: searchReducer,
    user: userReducer,
  },
});
