import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Shop from "./components/shop";
import Login from "./components/login";
import ProductItem from "./components/product-item";
import { useState } from "react";
import { UserContext } from "./context/user-context";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import Basket from "./components/basket";
import JeweleryProducts from "./components/jewelery-products";
import ElectronicsProducts from "./components/electronics-products";
import MenProducts from "./components/men's-products";
import WomenProducts from "./components/women's-products";
import Register from "./components/register";
import PageNotFound from "./components/404";

function App() {

  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Provider store={Store}>
          <div className="container">
            <Header />
            <div style={{ minHeight: '500px' , backgroundColor: '#EEEEEE' }}>
              <UserContext.Provider value={{ userName, password, setUserName, setPassword }}>
                <Outlet />
              </UserContext.Provider>
            </div>
            <Footer />
          </div>

        </Provider>
      ),
      errorElement: <PageNotFound/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: "/shop/:productId",
          element: <ProductItem />,
        },
        {
          path: "/shop/jewelery",
          element: <JeweleryProducts />,
        },
        {
          path: "/shop/electronics",
          element: <ElectronicsProducts />,
        },
        {
          path: "/shop/men's-clothing",
          element: <MenProducts />,
        },
        {
          path: "/shop/women's-clothing",
          element: <WomenProducts />,
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/basket',
          element: <Basket />
        }
      ]
    }

  ])

  return <RouterProvider router={router} />;
}



export default App;
