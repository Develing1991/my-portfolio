import { IMutation, IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } from '@/src/commons/types/generated/types';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_BOARD, FETCH_BOARD_LIKECOUNT, LIKE_BOARD } from './CommunityDetailPage.queries';
import CommunityDetailPagePresenter from './CommunityDetailPage.presenter';

export default function CommunityDetailPageContainer() {
	const { query } = useRouter();
	const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, { variables: { boardId: String(query.id) } });
	// console.log(data?.fetchBoard);

	const [likeBoard] = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(LIKE_BOARD);
	const onClickLikeBoard = () => {
		likeBoard({
			variables: {
				boardId: String(query.id)
			},
			optimisticResponse: {
				likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1
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
