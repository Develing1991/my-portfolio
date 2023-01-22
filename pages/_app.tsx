import { globalStyles } from '@/src/commons/styles/global.styles';
import LayoutIndex from '@/src/components/layouts/LayoutIndex';
import { Global } from '@emotion/react';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global styles={globalStyles} />
			<LayoutIndex>
				<Component {...pageProps} />
			</LayoutIndex>
		</>
	);
}
