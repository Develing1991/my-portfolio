import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const globalApolloState = new InMemoryCache();

export default function ApolloSettings({ children }: { children: JSX.Element }) {
	const client = new ApolloClient({
		uri: process.env.API_URL,
		cache: globalApolloState
	});
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
