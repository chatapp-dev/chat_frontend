import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes, useRef, useState } from 'react'

import { Icon } from '@/components/common'
import { mergeRefs } from '@/lib'
import styles from './Input.module.scss'

interface IInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label?: string
	isValid?: boolean
	classNames?: {
		input?: string
		label?: string
		container?: string
	}
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
	({ label, isValid = true, type, classNames, ...props }, ref) => {
		const inputRef = useRef<HTMLInputElement>(null)
		const [isPasswordVisible, setIsPasswordVisible] = useState(false)

		const handleLabelClick = () => {
			if (inputRef.current) {
				inputRef.current.focus()
			}
		}

		return (
			<div
				className={clsx(
					styles.container,
					!isValid && styles.containerInvalid,
					classNames?.container
				)}
			>
				{label && (
					<label
						className={clsx(styles.label, classNames?.label)}
						onClick={handleLabelClick}
					>
						{label}
					</label>
				)}
				<input
					ref={mergeRefs(inputRef, ref)}
					className={clsx(styles.input, classNames?.input)}
					type={
						type === 'password'
							? isPasswordVisible
								? 'text'
								: 'password'
							: type
					}
					{...props}
				/>
				{!isValid && (
					<div className={styles.error}>
						<Icon name='error' width={24} height={24} />
					</div>
				)}
				{type === 'password' && isValid && (
					<button
						type='button'
						className={styles.eye}
						onClick={() => setIsPasswordVisible(!isPasswordVisible)}
					>
						{isPasswordVisible ? (
							<Icon name='eye' width={24} height={24} />
						) : (
							<Icon name='eye-off' width={24} height={24} />
						)}
					</button>
				)}
			</div>
		)
	}
)
