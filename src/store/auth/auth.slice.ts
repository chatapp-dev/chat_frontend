import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { handleFullfiled, handlePending, handleRejected } from "./auth.status";
import { current, login, logout, register } from "./auth.operations";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, handlePending)
            .addCase(register.fulfilled, handleFullfiled)
            .addCase(register.rejected, handleRejected)
            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, handleFullfiled)
            .addCase(login.rejected, handleRejected)
            .addCase(current.pending, handlePending)
            .addCase(current.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(current.rejected, handleRejected)
            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, () => {
                return initialState;
            })
            .addCase(logout.rejected, handleRejected);
    },
});

export const authReducer = authSlice.reducer;
