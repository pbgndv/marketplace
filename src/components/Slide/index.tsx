import { ISlide } from '@/types/types'
import Link from 'next/link'
import './index.scss'

export default function Slide({ url, description, href }: ISlide) {
    const style = {
        backgroundImage: `url(${url})`,
        backgroundPosition: 'center center',
        width: '100%',
        height: 'calc(100lvh - 250px)',

        backgroundRepeat: 'no-repeat',
    }
    return (
        <>
            {
                href !== undefined ? (
					<div className="slide_container">
						<Link
							href={href}
							className='slide'
							style={{
								...style,
								objectFit: 'contain',

							}}
						/>
					</div>
                ) : (
                    <div
                        className='slide'
                        style={{
                            ...style,
                            objectFit: 'contain',
                        }}
                    />
                )
            }
        </>


        // <img className='slide' src={url} alt={description} />
    )
}