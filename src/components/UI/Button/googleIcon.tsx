import { IGoogleIconProps } from '@/types/types'


export default function GoogleIcon({ title, size, action }: IGoogleIconProps) {
	return (
		<a href="#">
			<span
				className="material-symbols-outlined icon"
				onClick={action}
			>
				{title}
			</span>
		</a>
	)
}
