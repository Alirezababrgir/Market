import "./App.css";
import { Helmet } from "react-helmet-async";
import MainLayout from "./components/mainlayout/mainlayout";
function App() {
  return (
    <MainLayout>
      <Helmet title="مشتبا فروشگاه استیکر"></Helmet>
    </MainLayout>
  );
}

export default App;
