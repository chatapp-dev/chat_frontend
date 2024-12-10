import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { handlePending } from "./auth.status";
import { login, register } from "./auth.operations";

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
            .addCase(
                register.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.isLoading = false;
                    state.isAuthenticated = true;
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                }
            )
            .addCase(register.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // .addCase(logout.pending, handlePending)
            // .addCase(logout.fulfilled, () => {
            //     return initialState;
            // })
            // .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
            //     state.isLoading = false;
            //     state.error = action.payload;
            // })
            // .addCase(getCurrentUser.pending, handlePending)
            // .addCase(
            //     getCurrentUser.fulfilled,
            //     (state, action: PayloadAction<any>) => {
            //         state.isLoading = false;
            //         state.isLoggedIn = true;
            //         state.user = action.payload;
            //         state.error = null;
            //     }
            // )
            // .addCase(
            //     getCurrentUser.rejected,
            //     (state, action: PayloadAction<any>) => {
            //         state.isLoading = false;
            //         state.error = action.payload;
            //     }
            // );
    },
});
