export const AppRoutes = {
	ROOT: '/',
	SIGN_IN: '/sign-in',
	SIGN_UP: '/sign-up',
	FORGOT_PASSWORD: '/forgot-password',
} as const

export const ApiRoutes = {
	AUTH: {
		//Example:
		SIGN_IN: '/auth/sign-in',
		SIGN_UP: '/auth/sign-up',
		SIGN_OUT: '/auth/sign-out',
	},
} as const
