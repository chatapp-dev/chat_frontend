export interface IAuthResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

export interface ILogoutResponse {
    message: string;
}
