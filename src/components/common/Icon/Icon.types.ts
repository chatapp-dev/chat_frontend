export type Icons =
	| 'eye-closed'
	| 'eye-open'
	| 'tick'
	| 'google-logo'
	| 'apple-logo'

export type IconProps = {
	name: Icons
	className?: string

	width?: number
	height?: number

	fill?: string
	stroke?: string
}
