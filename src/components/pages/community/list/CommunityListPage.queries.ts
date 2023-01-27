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

export const FETCH_BOARDS_COUNT = gql`
	query fetchBoardsCount($search: String) {
		fetchBoardsCount(search: $search)
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

/* Presenter */
