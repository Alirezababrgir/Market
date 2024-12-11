import Header from "../header";
import Navbar from "../navbar";
import ProductListing from "../productlist";

const MainLayout = ({ Children }) => {
  return (
    <div className="flex-col min-h-s">
      <Navbar />
      <Header />
      <ProductListing />
      <main>{Children}</main>
    </div>
  );
};
export default MainLayout;
