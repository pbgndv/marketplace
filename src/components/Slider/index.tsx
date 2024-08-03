import { useState } from 'react'

// styles
import './index.scss'

// data
import { Slides } from '@/data/Slides'

// components
import Slide from '@/components/Slide'
import GoogleIcon from '@/components/UI/Button/googleIcon'

export default function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0)


	return (
		<div className='slider'>
			<GoogleIcon title='arrow_back_ios' size={20} action={() => { console.log('tap') }} />
			{
				Slides.map(slide => <Slide key={slide.url} description={slide.description} url={slide.url} isCurrent={slide.isCurrent} />)
			}
			<button className='slider__button-left'>
				<span className="material-symbols-outlined slideIcon">
					arrow_forward_ios
				</span>
			</button>
		</div>
	)
}
