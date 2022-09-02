import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootType } from "./store";
export type Product = {
  title: string;
  price: number;
  id: string;
};
const initialState: Product[] = [
  { title: "Escape From Tarkov", price: 60, id: "eft" },
  { title: "Hunt: ShowDown", price: 70, id: "hunt" },
  { title: "Hell Let Loose", price: 55, id: "hll" },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return [action.payload, ...state];
    },
  },
});
export const productSelector = (state: RootType) => state.products;
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
