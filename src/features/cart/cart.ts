import { createSlice } from "@reduxjs/toolkit";

export type cartState = {
  user: string;
  cart: object[];
};

const initialState: cartState = {
  user: "hwang",
  cart: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartReducer: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { cartReducer } = cartSlice.actions;
export default cartSlice.reducer;
