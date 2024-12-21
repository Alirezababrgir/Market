import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomNumeralNumericFormat from "./NumberFormat";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ProductForm from "./ProductForm";
const ProductDetails = () => {
  const { productID } = useParams();

  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === productID)
  );

  return (
    <div className="flex flex-col align-middle justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
      {product ? (
        <>
          <HelmetProvider>
            <Helmet title={product.title}></Helmet>
          </HelmetProvider>

          <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg ml-5">
            <div className="relative h-96">
              <img
                src={`http://localhost:9000/images/${product.sticker}`}
                className="transform duration-500 ease-in-out hover:scale-105"
                alt={product.title}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
            <Link
              to="/Market"
              className="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
            >
              <i
                className="fa fa-arrow-left w-4 mr-2 inline-flex"
                aria-hidden="true"
              ></i>
              برگشت به صفحه محصولات
            </Link>

            <div className=" font-primary">
              <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
                {product.title}
              </h1>
              <p className="font-medium text-lg">{product.description}</p>
              <div className="text-xl text-palette-primary font-medium py-4 px-1">
                <CustomNumeralNumericFormat
                  value={product.price}
                  thousandSeparator=","
                  prefix={`قیمت : ‍‍‍`}
                  suffix={` تومان `}
                />
              </div>
            </div>

            <ProductForm product={product} />
          </div>
        </>
      ) : (
        <p>... بارگذاری محصول </p>
      )}
    </div>
  );
};

export default ProductDetails;
