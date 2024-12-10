import App from "@/components/App";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter basename="/chat_frontend">
                {/* <RouterProvider router={router} /> */}
                <App />
            </BrowserRouter>
        </Provider>
    );
};
