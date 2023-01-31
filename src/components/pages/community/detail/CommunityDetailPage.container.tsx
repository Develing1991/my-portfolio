import { FETCH_BOARD_LIKECOUNT } from './CommunityDetailPage.queries';
import CommunityDetailPagePresenter from './CommunityDetailPage.presenter';
import { ICommunityDetailPageContainerProps } from './CommunityDetailPage.types';

export default function CommunityDetailPageContainer({ fetchBoard, LikeBoardGQL, query }: ICommunityDetailPageContainerProps) {
	const [likeBoard] = LikeBoardGQL;
	const onClickLikeBoard = () => {
		likeBoard({
			variables: {
				boardId: String(query.id)
			},
			optimisticResponse: {
				likeBoard: (fetchBoard?.likeCount ?? 0) + 1
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
	return <>{fetchBoard && <CommunityDetailPagePresenter board={fetchBoard} onClickLikeBoard={onClickLikeBoard} />}</>;
}
