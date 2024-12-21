import ProductListing from "./productlist";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export const PaginateItems = ({ Productsperpage, products, status }) => {
  const [itemOffset, SetitemOffet] = useState(0);

  const endOffset = itemOffset + Productsperpage;

  const CurrentProducts = products.slice(itemOffset, endOffset);

  const ProductCount = Math.ceil(products.length / Productsperpage);

  const HandlepageClick = (e) => {
    const NewOffset = e.selected * Productsperpage;
    SetitemOffet(NewOffset);
  };

  return (
    <>
      <ProductListing CurrentProducts={CurrentProducts} status={status} />
      <ReactPaginate
        containerClassName="flex justify-center items-center mt-8 mb-4"
        pageClassName="block border border-solid border-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-2"
        activeClassName="bg-palette-primary text-palette-light hover:bg-palette-dark"
        breakLabel="..."
        onPageChange={HandlepageClick}
        pageRangeDisplayed={5}
        pageCount={ProductCount}
        previousLabel={null}
        nextAriaLabel={null}
        renderOnZeroPageCount={null}
      />
    </>
  );
};
