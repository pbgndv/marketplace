import { IGoogleIconProps } from '@/types/types'


export default function GoogleIcon({ title, size, action }: IGoogleIconProps) {
	return (
		<button className='button'>
			<span
				className="material-symbols-outlined"
				style={{
					fontSize: size + 'px'
				}}
				onClick={action}
			>
				{title}
			</span>
		</button>
	)
}
