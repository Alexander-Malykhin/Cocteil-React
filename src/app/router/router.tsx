import {createBrowserRouter, type RouteObject} from "react-router";
//pages
import {HomePage} from "@pages/HomePage";

const routes: RouteObject[] = [
    {
        path:"/",
        element:<HomePage/>
    }
]

export const router = createBrowserRouter(routes);