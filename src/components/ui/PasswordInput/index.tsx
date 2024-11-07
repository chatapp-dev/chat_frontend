import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes, RefObject, useState } from 'react'

import { Icon } from '@/components/common'
import styles from './PasswordInput.module.scss'

type PasswordInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type' | 'className'
> & {
	passwordRef?: RefObject<HTMLInputElement>
	isConfirm?: boolean

	classNames?: {
		wrapper?: string
		input?: string
		eye?: string
		tick?: string
	}
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ classNames, passwordRef, isConfirm, ...props }, ref) => {
		const [isRevealed, setIsRevealed] = useState(false)
		const [matches, setMatches] = useState(false)

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			props.onChange?.(event)

			if (!isConfirm || !passwordRef) return

			const password = passwordRef.current?.value
			const confirmPassword = event.target.value

			if (password && confirmPassword) {
				setMatches(event.target.value === passwordRef.current?.value)
			}
		}

		return (
			<div className={clsx(styles.wrapper, classNames?.wrapper)}>
				<input
					ref={ref}
					type={isRevealed ? 'text' : 'password'}
					className={clsx(styles.passwordInput, classNames?.input)}
					onChange={handleChange}
					{...props}
				/>
				<div
					className={clsx(styles.eye, classNames?.eye)}
					onClick={() => setIsRevealed(!isRevealed)}
				>
					<Icon
						name={!isRevealed ? 'eye-closed' : 'eye-open'}
						width={18}
						stroke='#929292'
						fill='none'
						height={12}
					/>
				</div>
				{isConfirm && (
					<div className={clsx(styles.tickWrapper, classNames?.tick)}>
						<Icon name='tick' width={14} height={8} />
					</div>
				)}
			</div>
		)
	}
)
