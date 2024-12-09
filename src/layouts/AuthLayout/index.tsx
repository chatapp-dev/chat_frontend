import { Outlet } from 'react-router-dom'

import styles from './AuthLayout.module.scss'

export const AuthLayout = () => {
	//TODO: Check whether user is authenticated or not. If yes, redirect him to main page.
	return (
		<div className={styles.wrapper}>
			<div>
				<div className={styles.content}>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
