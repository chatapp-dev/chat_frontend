import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'
import styles from './Text.module.scss'

const textVariants = cva('', {
	variants: {
		size: {
			xs: styles.xs,
			sm: styles.sm,
			base: styles.base,
			lg: styles.lg,
		},
		color: {
			black: styles.black,
			'gray-5': styles.gray5,
			'gray-4': styles.gray4,
			'gray-3': styles.gray3,
		},
		weight: {
			400: styles['weight-400'],
			600: styles['weight-600'],
			700: styles['weight-700'],
		},
	},
	defaultVariants: {
		color: 'black',
		size: 'base',
	},
})

type TextProps<T extends ElementType> = Omit<
	ComponentPropsWithoutRef<T>,
	'color' | 'size' | 'weight'
> &
	VariantProps<typeof textVariants> & {
		as?: ElementType
	}

export const Text = forwardRef<HTMLParagraphElement, TextProps<'p'>>(
	({ as: Component = 'p', weight, size, color, className, ...props }, ref) => {
		return (
			<Component
				ref={ref}
				className={textVariants({ className, weight, size, color })}
				{...props}
			/>
		)
	}
)
