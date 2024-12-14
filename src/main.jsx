import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NotFound from "./components/NotFound.jsx";
//import MainLayout from "./components/mainlayout/mainlayout.jsx";
//import ProductCard from "./components/productcards.jsx";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> }/*,
  {
    path: "/products/:productID",
    element: (
      <MainLayout>
        <ProductDetails />
      </MainLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainLayout>
        <CardTable />
      </MainLayout>
    ),
  },*/
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </StrictMode>
);
