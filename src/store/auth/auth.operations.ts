import {
  currentRequest,
  loginRequest,
  logoutRequest,
  registerRequest,
} from "@/services/auth/auth.api";
import { IRegisterData } from "@/components/common/Register/RegisterForm";
import { ILoginData } from "@/components/common/Login/LoginForm";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { RootState } from "../store";

export const register = createAsyncThunk(
  "auth/register",
  async (body: IRegisterData, { rejectWithValue }) => {
    try {
      const data = await registerRequest(body);
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
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
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export const current = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    const { token } = state.auth;

    if (token === null) {
      return rejectWithValue("Unable to fetch user");
    }

    try {
      const data = await currentRequest(token!);
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState() as RootState;

      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutRequest();
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);
