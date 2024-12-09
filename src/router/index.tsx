import { QueryProvider } from "@/providers";
import { router } from "@/router/router.tsx";
import { RouterProvider } from "react-router-dom";

export const Router = () => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
};
