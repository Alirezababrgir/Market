import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../slices/cartSlice";
const ProductForm = ({ product }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const atcBtnStyle = `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark`;

  const handleAddToCart = (item) => {
    dispatch(addCart(item));
    navigate("/cart");
  };

  const updateQty = () => {
    setQty(qty + 1);
  };

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <div className="flex flex-col items-start space-y-1 flex-grow-0">
          <label className="text-gray-500 text-base">تعداد</label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            value={qty}
            onChange={updateQty}
            className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
        <p className="text-green-600">در انبار موجود است</p>
      </div>
      <button
        className={atcBtnStyle}
        aria-label="cart-button"
        onClick={() => handleAddToCart({ ...product, countcart: qty })}
      >
        اضافه به سبد خرید
        <i className="fa fa-cart-arrow-down w-5 mr-2" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ProductForm;
