import { IMutation } from '@/src/commons/types/generated/types';
import { gql } from '@apollo/client';
import { GraphQLClient } from 'graphql-request';

const API_URL = process.env.API_URL;
const RESTORE_ACCESS_TOKEN = gql`
	mutation restoreAccessToken {
		restoreAccessToken {
			accessToken
		}
	}
`;

export const getAccessToken = async () => {
	try {
		if (!API_URL) {
			console.error('API_URL is not loaded.');
			return;
		}
		const graphQLClient = new GraphQLClient(API_URL, {
			credentials: 'include'
		});
		const result = await graphQLClient.request<Pick<IMutation, 'restoreAccessToken'>>(RESTORE_ACCESS_TOKEN);
		const newAccessToken = result.restoreAccessToken.accessToken;
		return newAccessToken;
	} catch (error) {
		console.error(error);
	}
};
