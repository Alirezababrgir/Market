import { Link } from "react-router-dom";
import CustomNumeralNumericFormat from "./NumberFormat";
// import CustomNumeralNumericFormat from "./Price";

const ProductCard = ({ product }) => {
  const { id, title, description, sticker, price } = product;

  return (
    <Link to={`/products/${id}`}>
      <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
        <div className="h-72 border-b-2 border-palette-lighter relative">
          <img
            src={`http://localhost:9000/images/${sticker}`}
            className="transform duration-500 ease-in-out hover:scale-110"
            alt={title}
          />
        </div>
        <div className="h-48 relative">
          <div className="font-primary text-palette-primary text-lg pt-4 px-4 font-semibold">
            {title}
          </div>
          <div className="text-base text-gray-600 p-4 font-primary font-light">
            {description}
          </div>
          <div
            className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-light
            rounded-tl-sm triangle"
          >
            <CustomNumeralNumericFormat
              value={price}
              thousandSeparator=","
              prefix={`قیمت : ‍‍‍`}
              suffix={` تومان `}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
