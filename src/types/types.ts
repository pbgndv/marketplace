
type TypeNotification = 'Successfully' | 'Warning' | 'Error'
type TypeButton = 'Primary' | 'Secondary'

export interface ISlide {
	url: string
	isCurrent: boolean
	description: string
}
export interface ISliderProps {
	slides: Array<ISlide>
}
export interface IButtonProps {
	title: string
	type?: TypeButton
	action?: () => void
}

export interface IGoogleIconProps extends IButtonProps {
	size?: number
}

