type TypeNotification = 'Successfully' | 'Warning' | 'Error'
type TypeButton = 'Primary' | 'Secondary'

export interface ISlide {
    url: string
    description: string
    href: string
}
export interface ISliderProps {
    slides: Array<ISlide>
}
export interface IButtonProps {
    title: string
    type?: TypeButton
    href?: string
    action?: () => void
}

export type IGoogleIconProps = IButtonProps