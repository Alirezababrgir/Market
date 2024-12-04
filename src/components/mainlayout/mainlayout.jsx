import Header from "../header";
import Navbar from "../navbar";

const MainLayout = ({ Children }) => {
  return (
    <div className="flex flex-col min-h-s">
      <Navbar />
      <Header />
      <main>{Children}</main>
    </div>
  );
};
export default MainLayout;
