import { Routes } from '@/constants'
import { AuthLayout } from '@/layouts'
import { SignInPage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: Routes.ROOT,
		element: <>Hello world</>,
		index: true,
	},
	{
		element: <AuthLayout />,
		children: [
			{
				element: <SignInPage />,
				path: Routes.SIGN_IN,
			},
		],
	},
])
