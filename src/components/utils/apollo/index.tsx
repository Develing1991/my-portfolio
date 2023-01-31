import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, fromPromise } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import { getAccessToken } from './libs/getAccessToken';
import { useRecoilState } from 'recoil';
import { accessTokenState, isLoggedState } from '@/src/commons/store';
import { useEffect } from 'react';
const globalApolloState = new InMemoryCache();

export default function ApolloSettings({ children }: { children: JSX.Element }) {
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
	const [isLogged] = useRecoilState(isLoggedState);
	useEffect(() => {
		// 로그드 true면 유지
		if (isLogged) {
			getAccessToken().then((newAccessToken) => {
				if (typeof newAccessToken !== 'string') return;
				setAccessToken(newAccessToken);
			});
		}
	}, []);

	const errorLink = onError(({ graphQLErrors, operation, forward }) => {
		if (graphQLErrors) {
			for (const err of graphQLErrors) {
				if (err.extensions.code === 'UNAUTHENTICATED') {
					console.log('토큰 만료');
					return fromPromise(
						getAccessToken().then((newAccessToken) => {
							if (typeof newAccessToken !== 'string') return;
							setAccessToken(newAccessToken);
							operation.setContext({
								headers: {
									...operation.getContext().headers,
									Authorization: `Bearer ${newAccessToken}`
								}
							});
						})
					).flatMap(() => forward(operation));
				}
				// 리프레시 만료 시 로직
			}
		}
	});
	const uploadLink = createUploadLink({
		uri: process.env.API_URL,
		headers: { Authorization: `Bearer ${accessToken}` },
		credentials: 'include'
	});
	const client = new ApolloClient({
		link: ApolloLink.from([errorLink, uploadLink]),
		cache: globalApolloState,
		connectToDevTools: true
	});
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
