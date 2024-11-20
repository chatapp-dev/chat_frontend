import { cva, VariantProps } from 'class-variance-authority'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './Button.module.scss'
import {clsx} from 'clsx'

const buttonVariants = cva(styles.button, {
	variants: {
		variant: {
			primary: styles.primary,
		},
		size: {
			small: styles.small,
			medium: styles.medium,
			big: styles.big,
		},
	},
	defaultVariants: {
		size: 'medium',
		variant: 'primary',
	},
})

interface IButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
			isIconOnly?: boolean
		}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	({ variant, size, className, isIconOnly,...props }, ref) => {
		return (
			<button
				ref={ref}
				className={buttonVariants({ className: clsx(className, isIconOnly && styles.icon), size, variant })}
				{...props}
			/>
		)
	}
)
