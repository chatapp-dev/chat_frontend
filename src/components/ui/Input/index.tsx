import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes } from 'react'

import styles from './Input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<input ref={ref} className={clsx(styles.input, className)} {...props} />
		)
	}
)
