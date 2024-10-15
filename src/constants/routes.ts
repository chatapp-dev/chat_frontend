

export const Routes = {
    ROOT: '/',
} as const

export const ApiRoutes = {
    AUTH: {
        //Example:
        SIGN_IN:"/auth/sign-in",
        SIGN_UP:"/auth/sign-up",
        SIGN_OUT:"/auth/sign-out",
    }
} as const