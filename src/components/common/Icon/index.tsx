import icons from '@/assets/icons.svg'
import { IconProps } from './Icon.types'

export const Icon = ({
	name,
	width = 24,
	height = 24,
	...props
}: IconProps) => {
	return (
		<svg width={width} height={height} {...props}>
			<use xlinkHref={`${icons}#${name}`} />
		</svg>
	)
}
