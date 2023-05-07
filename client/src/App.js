import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home"

import Header from "./components/Header";
import Footer from "./components/Footer";
import AddRecepie from "./pages/addRecepie";
import Single from "./pages/singleRecepie";

const Layout = () => {
  return (  <>
    <Header />
    <Outlet />
    <Footer />
  </>)
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/post',
        element: <AddRecepie />
      },
      {
        path:'recepie/:id',
        element: <Single />
      }

    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
