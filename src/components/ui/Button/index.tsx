import { cva, VariantProps } from 'class-variance-authority'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './Button.module.scss'

const buttonVariants = cva(styles.button, {
	variants: {
		variant: {
			primary: styles.primary,
			light: styles.light,
		},
		size: {
			sm: styles.sm,
			base: styles.base,
		},
	},
	defaultVariants: {
		size: 'base',
		variant: 'primary',
	},
})

interface IButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	({ variant, size, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={buttonVariants({ className, size, variant })}
				{...props}
			/>
		)
	}
)
