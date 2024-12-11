import { ILoginData, IRegisterData } from "@/components/common";
import instance from "../axios.config";
import { IAuthResponse, ILogoutResponse } from "./response.types";
import ENDPOINTS from "../endpoints";

const setToken = (token?: string) => {
    if (token) {
        return (instance.defaults.headers.authorization = `Bearer ${token}`);
    }

    instance.defaults.headers.authorization = "";
};

export const registerRequest = async (body: IRegisterData) => {
    const response = await instance.post<IAuthResponse>(
        ENDPOINTS.auth.register,
        body
    );
    setToken(response.data.token);
    return response.data;
};

export const loginRequest = async (body: ILoginData) => {
    const response = await instance.post<IAuthResponse>(
        ENDPOINTS.auth.login,
        body
    );
    setToken(response.data.token);
    return response.data;
};

export const currentRequest = async (token: string) => {
    setToken(token);
    try {
        const response = await instance.get<IAuthResponse>(
            ENDPOINTS.auth.current
        );
        return response.data;
    } catch (error) {
        setToken();
        throw error;
    }
};

export const logoutRequest = async () => {
    const response = await instance.post<ILogoutResponse>(
        ENDPOINTS.auth.logout
    );
    setToken();
    return response.data;
};
