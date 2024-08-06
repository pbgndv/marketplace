import { IGoogleIconProps } from '@/types/types'
import Link from 'next/link'

export default function GoogleIcon({ title, href, action }: IGoogleIconProps) {
    return (
        <>
            {
                href ? (
                    <Link href={href} className='googleIcon href'>
                        <span
                            className="material-symbols-outlined"
                            onClick={action}
                        >
                            {title}
                        </span>
                    </Link>
                ) : (
                    <button className='googleIcon button'>
                        <span
                            className="material-symbols-outlined icon"
                            onClick={action}
                        >
                            {title}
                        </span>
                    </button>
                )
            }
        </>
    )
}