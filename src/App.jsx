import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MainLayout from "./components/mainlayout/mainlayout";
function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet title="فروشگاه استیکر" />
      </HelmetProvider>
      <MainLayout>
        <Helmet title="مشتبا فروشگاه استیکر"></Helmet>
      </MainLayout>
    </>
  );
}

export default App;
