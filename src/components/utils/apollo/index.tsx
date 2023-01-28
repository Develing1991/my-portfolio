import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const globalApolloState = new InMemoryCache();

export default function ApolloSettings({ children }: { children: JSX.Element }) {
	const uploadLink = createUploadLink({
		uri: process.env.API_URL
	});
	const client = new ApolloClient({
		link: ApolloLink.from([uploadLink]),
		cache: globalApolloState
	});
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
