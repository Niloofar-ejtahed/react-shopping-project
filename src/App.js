import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Shop from "./components/shop";
import About from "./components/about";
import Login from "./components/login";
import Register from "./components/register";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      errorElement: <div>404</div>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/shop',
          element:<Shop/>
        },
                {
          path:'/about',
          element:<About/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        }
      ]
    }

  ])

  return <RouterProvider router={router} />;
}



export default App;
