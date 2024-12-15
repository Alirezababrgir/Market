import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../slices/cartSlice";
const ProductForm = ({ product }) => {
  const [qty] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const atcBtnStyle = `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark`;

  const handleAddToCart = (item) => {
    dispatch(addCart(item));
    navigate("/cart");
  };


  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
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
