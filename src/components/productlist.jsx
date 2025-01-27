import ProductCard from "./productcards";

const ProductListing = ({CurrentProducts,status}) => {

    return (
        <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            {status === "success" ? (
                <>
                    {CurrentProducts?.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </>
            ) : status === "pending" ? (
                <p>در حال بارگذاری</p>
            ) : (
                <p>مشکلی پیش آمده...</p>
            )}
        </div>
    );
};

export default ProductListing;