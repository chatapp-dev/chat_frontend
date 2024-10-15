import {createBrowserRouter} from "react-router-dom";
import {Routes} from "@/constants";


export const router = createBrowserRouter([
    {
        path:Routes.ROOT,
        element: <>Hello world</>
    }
])