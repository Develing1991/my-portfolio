import { IBoard, IBoardComment, IMutation, IMutationLikeBoardArgs } from '@/src/commons/types/generated/types';
import { ApolloCache, DefaultContext, MutationTuple } from '@apollo/client';
import { ParsedUrlQueryInput } from 'querystring';

/* Container */
export interface ICommunityDetailPageContainerProps {
	fetchBoard: IBoard | undefined;
	LikeBoardGQL: MutationTuple<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs, DefaultContext, ApolloCache<any>>;
	query: ParsedUrlQueryInput;
}

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
