import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Shop from "./components/shop";
import About from "./components/about";

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
        }
      ]
    }

  ])

  return <RouterProvider router={router} />;
}



export default App;
