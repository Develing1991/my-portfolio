import { IMutation, IMutationCreateBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from '@/src/commons/types/generated/types';
import { LoadingBar } from '@/src/components/commons/loadings/Loading';
import Modal from '@/src/components/commons/modals/Modal';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState, ChangeEvent, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from '../CommunityDetailPage.queries';
import * as S from '../CommunityDetailPage.styles';
import CommentItem from './CommentItem';

const CommentList = () => {
	const { query } = useRouter();
	const [comments, setComments] = useState('');
	const [openModal, setOpenModal] = useState(false);
	const commentsRef = useRef<HTMLTextAreaElement>(null);
	const { data, fetchMore } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
		variables: {
			boardId: String(query.id)
		}
	});

	const currPage = Math.ceil((data?.fetchBoardComments.length ?? 1) / 10);
	const [createBoardComment] = useMutation<Pick<IMutation, 'createBoardComment'>, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);

	const onChangeCommentText = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setComments(() => event.target.value);
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
			},
			update(cache, { data }) {
				cache.modify({
					fields: {
						fetchBoardComments(prev) {
							return [data?.createBoardComment, ...prev];
						}
					}
				});
			}
			// refetchQueries: [{query:FETCH_BOARD_COMMENTS}]
		});
		if (commentsRef.current) commentsRef.current.value = '';
		setOpenModal(() => false);
	};

	return (
		<S.PostCommentContainer>
			<Modal
				title="알림"
				content="댓글을 등록하시겠습니까?"
				isConfirm={true}
				isOpen={openModal}
				onClickConfirm={createComment}
				onClickOkayCancel={() => {
					setOpenModal(false);
				}}
			/>
			<S.CommentWrite>
				<S.ContentTextArea placeholder="댓글을 남겨보세요." onChange={onChangeCommentText} ref={commentsRef} />
				<S.CommentRegButton
					onClick={() => {
						setOpenModal(true);
					}}
				>
					등록
				</S.CommentRegButton>
			</S.CommentWrite>
			<S.CommentList>
				{data?.fetchBoardComments && (
					<InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={data.fetchBoardComments.length > 0 && data.fetchBoardComments.length % 10 === 0} loader={<LoadingBar key={0} />}>
						{data?.fetchBoardComments.map((el) => {
							return <CommentItem key={el._id} commentItem={el} />;
						})}
					</InfiniteScroll>
				)}
			</S.CommentList>
		</S.PostCommentContainer>
	);
};

export default CommentList;
