import { PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "./auth.types";

export const handlePending = (state: IAuthState) => {
    state.isLoading = true;
    state.error = null;
};

export const handleFullfiled = (
    state: IAuthState,
    action: PayloadAction<any>
) => {
    state.isLoading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.token = action.payload.token;
};

export const handleRejected = (
    state: IAuthState,
    action: PayloadAction<any>
) => {
    state.isLoading = false;
    state.error = action.payload;
};
