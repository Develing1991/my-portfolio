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

/* components.presenter/CommentList */
export const FETCH_BOARD_COMMENTS = gql`
	query fetchBoardComments($page: Int, $boardId: ID!) {
		fetchBoardComments(page: $page, boardId: $boardId) {
			_id
			writer
			contents
			createdAt
			updatedAt
		}
	}
`;
export const CREATE_BOARD_COMMENT = gql`
	mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
		createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
			_id
			writer
			contents
			createdAt
			updatedAt
		}
	}
`;
export const UPDATE_BOARD_COMMENT = gql`
	mutation updateBoardComment($updateBoardCommentInput: UpdateBoardCommentInput!, $password: String, $boardCommentId: ID!) {
		updateBoardComment(updateBoardCommentInput: $updateBoardCommentInput, password: $password, boardCommentId: $boardCommentId) {
			_id
			writer
			contents
			createdAt
			updatedAt
		}
	}
`;
export const DELETE_BOARD_COMMENT = gql`
	mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
		deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
	}
`;
