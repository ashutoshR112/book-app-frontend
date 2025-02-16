import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import CartPage from "../pages/books/CartPage";
import Checkout from "../pages/books/Checkout";
import SingleBook from "../pages/books/SingleBook";
import PrivateRouter from "./privateRouter";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/managebooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";
import UserDashboard from "../pages/dashboard/users/UserDashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        { 
          path: "/",
          element: <Home/>,
        },
        {
          path:"/orders",
          element:<PrivateRouter><OrderPage/></PrivateRouter>,
        },
        { 
          path: "/login",
          element: <Login/>,
        },
        { 
          path: "/register",
          element: <Register/>,
        },
        { 
          path: "/cart",
          element: <CartPage/>,
        },
        {
          path: "/checkout",
          element: <PrivateRouter><Checkout /></PrivateRouter>,
        },
        {
          path: "/books/:id",
          element: <SingleBook />,
        },
        {
          path: "/user-dashboard",
          element: <PrivateRouter><UserDashboard/></PrivateRouter>
        }
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",
      element:<AdminRoute><DashboardLayout/></AdminRoute>,
      children:[
        {
          path: "",
          element: <AdminRoute><Dashboard/></AdminRoute>
        },
        {
          path: "add-new-book",
          element: <AdminRoute>
            <AddBook/>
          </AdminRoute>
        },
        {
          path: "edit-book/:id",
          element: <AdminRoute>
            <UpdateBook/>
          </AdminRoute>
        },
        {
          path: "manage-books",
          element: <AdminRoute>
            <ManageBooks/>
          </AdminRoute>
        }
      ],
    },
  ]);
  export default router;