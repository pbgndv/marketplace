// styles
import '@/styles/flickity.css'
import './index.scss'

// data

// components
import { Slides } from '@/data/Slides'
import Flickity, { FlickityOptions } from 'react-flickity-component'
import Slide from '../Slide'

export default function SliderPage() {
    const options: FlickityOptions = {
        initialIndex: 0,
        contain: true,
        autoPlay: true
    }

    return (
        <Flickity
            className='slider'
            disableImagesLoaded={false}
            options={options}
            elementType='div'
            reloadOnUpdate
            static

        >
            {
                Slides.map(slide => <Slide key={slide.description} description={slide.description} url={slide.url} href={slide.href} />)

            }
        </Flickity>
    )
}