import "@/styles/globals.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/chat_frontend">
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
