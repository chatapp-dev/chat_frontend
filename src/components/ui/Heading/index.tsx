import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, HTMLAttributes } from 'react'

import styles from './Heading.module.scss'

const headingVariants = cva('', {
	variants: {
		size: {
			'4xl': styles['xl-4'],
		},
	},
})

interface IHeadingProps
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = forwardRef<HTMLHeadingElement, IHeadingProps>(
	({ as = 'h3', size, className, ...props }, ref) => {
		const Component = as
		return (
			<Component
				ref={ref}
				className={headingVariants({ className, size })}
				{...props}
			/>
		)
	}
)
