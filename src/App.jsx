import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MainLayout from "./components/mainlayout/mainlayout";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <MainLayout>
        <Navbar />
        <Outlet />
        <HelmetProvider>
          <Helmet title="مشتبا فروشگاه استیکر"></Helmet>
        </HelmetProvider>
      </MainLayout>
    </>
  );
}

export default App;
