import {RouterProvider} from 'react-router-dom'
import {router} from "@/router/router.tsx";


export const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}