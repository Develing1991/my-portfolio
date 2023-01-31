import { IBoard, IBoardComment } from '@/src/commons/types/generated/types';

/* Container */

/* Presenter */
export interface ICommunityDetailPagePresenterProps {
	board: IBoard;
	onClickLikeBoard: () => void;
}

/* components.presenter/CommentList */

/* components.presenter/CommentItem */
export interface ICommentItemProps {
	commentItem: IBoardComment;
}
