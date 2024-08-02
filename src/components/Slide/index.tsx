import { ISlide } from '@/types/types'

export default function Slide({ url, description, isCurrent }: ISlide) {
	return (
		<>
			{isCurrent && <img src={url} alt={description} />}
		</>
	)
}
