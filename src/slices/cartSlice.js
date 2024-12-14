import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartitems: localStorage.getItem("CartItems")
    ? JSON.parse(localStorage.getItem("CartItems"))
    : [],
  countcart: 0,
  cartAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const existingIndex = state.cartitems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartitems[existingIndex] = {
          ...state.cartitems[existingIndex],
          countcart: state.cartitems[existingIndex].countcart + 1,
        };
        toast.info("تعداد افزایش یافت", { position: "bottom-right" });
      } else {
        let prouctItem = {
          ...action.payload,
          countcart: action.payload.countcart,
        };
        state.cartitems.push(prouctItem);
        toast.success("محصول به سبد خرید اضافه شد !", {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartitems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartitems[itemIndex].countcart > 1) {
        state.cartitems[itemIndex].countcart -= 1;

        toast.info("تعداد کاهش یافت", {
          position: "bottom-left",
        });
      } else if (state.cartitems[itemIndex].countcart === 1) {
        const nextCartItems = state.cartitems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartitems = nextCartItems;

        toast.error("محصول از سبد خرید حذف شد", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartitems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartitems.map((cartitems) => {
        if (cartitems.id === action.payload.id) {
          const nextCartItems = state.cartitems.filter(
            (item) => item.id !== cartitems.id
          );

          state.cartitems = nextCartItems;

          toast.error("محصول از سبد خرید حذف شد", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
        return state;
      });
    },
    getTotal(state, action) {
      let { total, qty } = state.cartitems.reduce(
        (cartTotal, cardItem) => {
          const { price, cardcount } = cardItem;
          const itemTotal = price * cardcount;
          cartTotal.total += itemTotal;
          cartTotal.cardcount += cardcount;
          return cartTotal;
        },
        { total: 0, qty: 0 }
      );
      total = parseFloat(total.toFixed(2));
      state.countcart = qty;
      state.cartAmount = total;
    },
  },
});
export const { addCart, getTotal, decreaseCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
