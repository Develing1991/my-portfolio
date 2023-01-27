import { gql } from '@apollo/client';

/* Container */

export const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			_id
			__typename
			writer
			title
			contents
			images
			likeCount
			createdAt
			deletedAt
		}
	}
`;
export const FETCH_BOARD_LIKECOUNT = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			_id
			__typename
			likeCount
		}
	}
`;

export const LIKE_BOARD = gql`
	mutation likeBoard($boardId: ID!) {
		likeBoard(boardId: $boardId)
	}
`;

/* Presenter */
