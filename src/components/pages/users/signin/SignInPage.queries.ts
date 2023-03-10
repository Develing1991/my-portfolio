import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			accessToken
		}
	}
`;

export const LOGIN_USER_EXAMPLE = gql`
	mutation loginUserExample($email: String!, $password: String!) {
		loginUserExample(email: $email, password: $password) {
			accessToken
		}
	}
`;

export const LOGOUT_USER = gql`
	mutation {
		logoutUser
	}
`;
