import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import PrivateRoute from "./PrivateRoute";

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/menu",
                element:<Menu></Menu>
            },
            {
                path:"/order/:category",
                element:<Order></Order>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<Signup></Signup>
            },
        ]
    },
    {
        path:"dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:"/dashboard",
                element:<UserHome></UserHome>
            },
            {
                path:"cart",
                element:<Cart></Cart>
            },
            {
                path:"all-users",
                element:<AllUsers></AllUsers>
            },
            {
                path:"manage-items",
                element:<ManageItems></ManageItems>
            },
        ]
    }
])

export default myCreatedRoute;