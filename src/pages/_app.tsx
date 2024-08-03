import type { AppProps } from 'next/app'
import '../app/index.css'

export default function MarketplaceApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}