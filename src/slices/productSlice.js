import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialstate = {
  items: [],
  status: null,
};
export const fetchproducts = createAsyncThunk(
  "products/fetchproducts",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/stickers"
      ); /*127.0.0.1*/
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
const productslice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchproducts.pending]: (state, action) => (state.status = "pending"),
  },
  [fetchproducts.fulfilled]: (state, action) => {
    state.items = action.payload;
    state.status = "success";
  },
  [fetchproducts.rejected]: (state, action) => {
    state.status = "rejected";
  },
});

export default productslice.reducer;
