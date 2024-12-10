import { router } from "@/router/router.tsx";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

export const Router = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
