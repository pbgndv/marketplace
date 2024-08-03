import { IButtonProps } from '@/types/types'
import './Default.scss'

export default function Button({ title, type = 'Primary', action = () => { } }: IButtonProps) {


	return (
		<button
			className={type === 'Primary' ? 'button__primary' : 'button__secondary'}
			onClick={action}
		>
			{title}
		</button>
	)
}
