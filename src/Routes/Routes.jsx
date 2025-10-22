import { createBrowserRouter } from "react-router";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AuthLayOut from "../Layouts/AuthLayOut/AuthLayOut";
import HomeLayout from "../Layouts/HomeLayOute";
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Pages/Home";
import Loading from "../Pages/Loading/Loading";
import Login from "../Pages/Login/Login";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element:<Home></Home>
                },
                {
                    path:"/category/:id",
                    element:<CategoryNews></CategoryNews>,
                    loader:() => fetch("/news.json"),
                    hydrateFallbackElement:<Loading></Loading>
                }
            ]
        },
        {
            path:"/auth",
            element:<AuthLayOut></AuthLayOut>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>
                }
            ]
        },
        {
            path:"/news-details/:id",
            element:<PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>,
            loader:() => fetch("/news.json"),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            path:"/*",
            element:<h2>Error 404 Page Not Found</h2>
        },
    ]
)
export default router;