import clsx from 'clsx'
import { forwardRef, LabelHTMLAttributes } from 'react'
import styles from './Label.module.scss'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
	({ className, ...props }, ref) => {
		return (
			<label ref={ref} className={clsx(styles.label, className)} {...props} />
		)
	}
)
