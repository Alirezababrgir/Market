import Header from "../header";
import Navbar from "../navbar";
import { useSelector } from "react-redux";
import { PaginateItems } from "../Paginate";

//PAGINATE=>(6)products

const MainLayout = ({ Children }) => {
  const { items: products, status } = useSelector((state) => state.products);

  return (
    <div className="flex-col min-h-s">
      <Navbar />
      <Header />
      <PaginateItems Productsperpage={8} products={products} status={status} />
      <main>{Children}</main>
    </div>
  );
};
export default MainLayout;
