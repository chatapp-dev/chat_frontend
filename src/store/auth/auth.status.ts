import { PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "./auth.types";

export const handlePending= (state: IAuthState) => {
    state.isLoading = true;
    state.error = null;
}

export const handleRejected = (state: IAuthState, action: PayloadAction<string>) => {
    state.isLoading = false;
    state.error = action.payload;
  };