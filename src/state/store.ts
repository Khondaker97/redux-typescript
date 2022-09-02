import { configureStore } from "@reduxjs/toolkit";
import products from "./Product.slice";
const store = configureStore({
  reducer: {
    products,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export default store;
