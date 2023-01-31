import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalReset } from '@/src/commons/styles/globalReset.css';
import { globalVariables } from '@/src/commons/styles/globalVariables.css';
import ApolloSettings from '@/src/components/utils/apollo';
import LayoutIndex from '@/src/components/layouts/LayoutIndex';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global styles={globalReset} />
			<Global styles={globalVariables} />
			<RecoilRoot>
				<ApolloSettings>
					<LayoutIndex>
						<Component {...pageProps} />
					</LayoutIndex>
				</ApolloSettings>
			</RecoilRoot>
		</>
	);
}
