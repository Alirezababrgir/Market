import { configureStore } from "@reduxjs/toolkit";
import  productsReducer,{ fetchProducts } from "../slices/productSlice";
import cartReducer, { getTotal } from "../slices/cartSlice";
import { productApi } from "../slices/productApi";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddeleware) =>
    getDefaultMiddeleware().concat(productApi.middleware),
});

store.dispatch(fetchProducts());
store.dispatch(getTotal());
