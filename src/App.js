import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

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
        }
      ]
    }

  ])

  return <RouterProvider router={router} />;
}



export default App;
