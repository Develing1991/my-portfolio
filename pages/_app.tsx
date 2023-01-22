// import '../styles/globals.css'

import { globalStyles } from '@/src/commons/styles/global.styles';
import { Global } from '@emotion/react';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global styles={globalStyles} />
			<Component {...pageProps} />
		</>
	);
}
