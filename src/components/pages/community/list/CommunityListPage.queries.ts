import { gql } from '@apollo/client';

/* Container */
export const FETCH_BOARDS = gql`
	query fetchBoards($page: Int, $search: String) {
		fetchBoards(page: $page, search: $search) {
			_id
			__typename
			writer
			title
			contents
			images
			likeCount
			createdAt
		}
	}
`;

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

export const FETCH_BOARD_COMMENTS = gql`
	query fetchBoardComments($page: Int, $boardId: ID!) {
		fetchBoardComments(page: $page, boardId: $boardId) {
			_id
			__typename
			writer
			contents
			images
			createdAt
		}
	}
`;

/* Presenter */
