import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NotFound from "./components/NotFound.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./components/ProductDetails.jsx";
import CartTable from "./components/CartTable.jsx";

const router = createBrowserRouter([
  { path: "/Market", element: <App />, errorElement: <NotFound /> },
  {
    path: "/products/:productID",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: (
        <CartTable/>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </StrictMode>
);
