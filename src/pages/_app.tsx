import '@/styles/index.css'
import type { AppProps } from 'next/app'

export default function MarketplaceApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}