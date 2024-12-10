import { ILoginData, IRegisterData } from "@/components/common";
import { loginRequest, registerRequest } from "@/services/auth/auth.api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";

export const register = createAsyncThunk(
    "auth/register",
    async (body: IRegisterData, { rejectWithValue }) => {
        try {
            const data = await registerRequest(body);
            return data;
        } catch (error) {
            if(isAxiosError(error)) {
                return rejectWithValue(error.response?.data);
            }
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (body: ILoginData, { rejectWithValue }) => {
        try {
            const data = await loginRequest(body);
            return data;
        } catch (error) {
            if(isAxiosError(error)) {
                return rejectWithValue(error.response?.data);
            }
        }
    }
);
