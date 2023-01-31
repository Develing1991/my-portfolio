import CommunityDetailPagePresenter from './CommunityDetailPage.presenter';
import { FETCH_BOARD, FETCH_BOARD_LIKECOUNT, LIKE_BOARD } from './CommunityDetailPage.queries';
import { IMutation, IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } from '@/src/commons/types/generated/types';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

export default function CommunityDetailPageContainer() {
	const { query } = useRouter();
	const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, { variables: { boardId: String(query.id) } });
	const LikeBoardGQL = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(LIKE_BOARD);

	const [likeBoard] = LikeBoardGQL;
	const onClickLikeBoard = () => {
		likeBoard({
			variables: {
				boardId: String(query.id)
			},
			optimisticResponse: {
				likeBoard: (data?.fetchBoard?.likeCount ?? 0) + 1
			},
			update(cache, { data }) {
				cache.writeQuery({
					query: FETCH_BOARD_LIKECOUNT,
					variables: { boardId: String(query.id) },
					data: {
						fetchBoard: {
							_id: String(query.id),
							__typename: 'Board',
							likeCount: data?.likeBoard
						}
					}
				});
			}
		});
	};
	return <>{data?.fetchBoard && <CommunityDetailPagePresenter board={data?.fetchBoard} onClickLikeBoard={onClickLikeBoard} />}</>;
}
