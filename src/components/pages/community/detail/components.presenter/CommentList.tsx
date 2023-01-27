import { IMutation, IMutationCreateBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from '@/src/commons/types/generated/types';
import { LoadingBar } from '@/src/components/commons/loadings/Loading';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState, ChangeEvent } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from '../CommunityDetailPage.queries';
import * as S from '../CommunityDetailPage.styles';
import CommentItem from './CommentItem';
const CommentList = () => {
	const { query } = useRouter();
	const [comments, setComments] = useState('');
	// console.log(query);
	const { data, fetchMore } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
		variables: {
			// page:1,
			boardId: String(query.id)
		}
	});

	const currPage = Math.ceil((data?.fetchBoardComments.length ?? 1) / 10);
	// const lastPage = Math.ceil((dataCount?.fetchBoardsCount ?? 0) / 10);

	const [createBoardComment] = useMutation<Pick<IMutation, 'createBoardComment'>, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);
	console.log(data);

	const onChangeCommentText = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setComments(() => event.target.value);
	};
	const createComment = () => {
		createBoardComment({
			variables: {
				boardId: String(query.id),
				createBoardCommentInput: {
					writer: '작성자12',
					password: '1234',
					contents: comments,
					rating: 4
				}
			}
		});
	};

	const onLoadMore = () => {
		if (!data?.fetchBoardComments) return;
		fetchMore({
			variables: { page: currPage + 1 },
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult.fetchBoardComments) {
					return {
						fetchBoardComments: [...prev.fetchBoardComments]
					};
				}
				return {
					fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments]
				};
			}
		});
	};
	return (
		<S.PostCommentContainer>
			<S.CommentWrite>
				<S.ContentTextArea placeholder="댓글을 남겨보세요." onChange={onChangeCommentText} />
				<S.CommentRegButton onClick={createComment}>등록</S.CommentRegButton>
			</S.CommentWrite>
			<S.CommentList>
				{data?.fetchBoardComments && (
					<InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={data.fetchBoardComments.length % 10 === 0} loader={<LoadingBar key={0} />}>
						{data?.fetchBoardComments.map((el) => {
							return <CommentItem key={el._id} comment={el} />;
						})}
					</InfiniteScroll>
				)}
			</S.CommentList>
		</S.PostCommentContainer>
	);
};

export default CommentList;
