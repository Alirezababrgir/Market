import "./App.css";
import { Helmet } from "react-helmet-async";
import MainLayout from "./components/mainlayout/mainlayout";
import Header from "./components/header";
function App() {
  return (
    <MainLayout>
      <Helmet title="مشتبا فروشگاه استیکر"></Helmet>
      <div className="mx-auto max-w-6xl">
        <Header />
      </div>
    </MainLayout>
  );
}

export default App;
