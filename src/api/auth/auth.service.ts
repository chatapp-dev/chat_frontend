// Example

import axios from "axios";
import {ApiRoutes} from "@/constants";

const signIn = async (dto: unknown) => {
    return axios.post(ApiRoutes.AUTH.SIGN_IN,dto);
}

export const AuthApi = {
    signIn
} as const

