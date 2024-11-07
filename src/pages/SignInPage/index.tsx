import {
	Button,
	Heading,
	Input,
	Label,
	PasswordInput,
	Text,
} from '@/components/ui'

import { Icon } from '@/components/common'
import { Routes } from '@/constants'
import { useForm } from '@/hooks'
import { Link } from 'react-router-dom'
import styles from './SignInPage.module.scss'

// TODO: прибрати цей тип потім, коли вже реалізуємо api для auth, де вже буде тип SignInInput, який й використати тут
type TypeFormValues = {
	email: string
	password: string
}

export const SignInPage = () => {
	const { register, handleSubmit } = useForm<TypeFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onBlur',
	})

	const onSubmit = async (data: TypeFormValues) => {
		console.log(data)
	}

	return (
		<div className={styles.container}>
			<div>
				<Heading size={'4xl'} as='h1'>
					Welcome Back to Your
					<br />
					Motivational Space
				</Heading>
				<Text size='base'>
					Reconnect with a community that inspires. Share your goals,
					achievements, and keep the momentum going. Let's get back to making
					progress together
				</Text>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.fields}>
					<div className={styles.field}>
						<Label htmlFor='email'>Email</Label>
						<Input
							type='email'
							id='email'
							placeholder='mail@abc.com'
							{...register('email')}
						/>
					</div>
					<div className={styles.field}>
						<Label htmlFor='password'>Password</Label>
						<PasswordInput
							id='password'
							placeholder='*****************'
							{...register('password')}
						/>
						<Link to={Routes.FORGOT_PASSWORD}>Forgot your password?</Link>
					</div>
				</div>
				<Button className={styles.submitBtn} type='submit'>
					Log In and Stay Motivated
				</Button>
			</form>
			<Text size='xs' weight={600} as='span' className={styles.or}>
				-------------or-------------
			</Text>
			<div className={styles.alternativeAuth}>
				<Button size={'sm'} variant={'light'}>
					<Icon name='google-logo' width={24} height={24} />
					Sign in with Google
				</Button>
				<Button size='sm' variant={'light'}>
					<Icon name='apple-logo' width={24} height={24} />
					Sign in with Apple
				</Button>
			</div>
			<div className={styles.signUp}>
				<Text color='gray-3' size='lg'>
					Not Member of Our Motivation Realm?
				</Text>
				<Link to={Routes.SIGN_UP}>
					<Text size='lg' weight={600} as={'span'}>
						Become a member
					</Text>
				</Link>
			</div>
		</div>
	)
}
