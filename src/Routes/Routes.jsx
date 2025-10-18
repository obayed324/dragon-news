import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayOute";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>
        },
        {
            path:"/auth",
            element:<h2>Authentication Layout</h2>
        },
        {
            path:"/news",
            element:<h2>News Layout</h2>
        },
        {
            path:"/*",
            element:<h2>Error 404 Page Not Found</h2>
        },
    ]
)
export default router;