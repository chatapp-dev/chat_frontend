import appleLogo from '@/assets/images/apple-logo.png'
import googleLogo from '@/assets/images/google-logo.png'
import logo from '@/assets/images/logo.png'
import { Icon } from '@/components/common'
import { Button, Input } from '@/components/ui'
import { Routes } from '@/constants'
import { useForm } from '@/hooks'
import { Link } from 'react-router-dom'
import styles from './SignInPage.module.scss'

type FormValues = {
	email: string
	password: string
}

export const SignInPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		mode: 'onBlur',
	})

	const onSubmit = () => {}
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				<img src={logo} />
			</div>
			<div className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<div className={styles.header}>
						<h1>Welcome Back to Your Motivational Space</h1>
						<p>
							Reconnect with a community that inspires. Share your goals,
							achievements, and keep the momentum going. Let's get back to
							making progress together
						</p>
					</div>
					<Input
						placeholder='tom_hiddleston@gmail.com'
						type='email'
						label='Email'
						isValid={!errors.email}
						{...register('email')}
					/>
					<Input
						placeholder='**********'
						type='password'
						label='Password'
						isValid={!errors.password}
						{...register('password')}
					/>

					<Link className={styles.forgotPassword} to={Routes.FORGOT_PASSWORD}>
						Forgot your password?
					</Link>
					<Button className={styles.submitButton}>
						Log In and Stay Motivated
						<Icon name='arrow-top-right' width={24} height={24} />
					</Button>
				</form>
				<span className={styles.or}>or</span>
				<div className={styles.socialAuth}>
					<Button>
						<img src={googleLogo} alt='google logo' />
						Sign in with Google
					</Button>
					<Button>
						<img src={appleLogo} alt='apple logo' />
						Sign in with Apple
					</Button>
				</div>
				<div className={styles.noAccount}>
					<p>Not Member of Our Motivation Realm?</p>
					<Link to={Routes.SIGN_UP}>Become a member</Link>
				</div>
			</div>
		</div>
	)
}
