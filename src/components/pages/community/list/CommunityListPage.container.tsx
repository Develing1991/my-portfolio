import CommunityPagePresenter from '@/src/components/pages/community/list/CommunityListPage.presenter';
import { IQuery, IQueryFetchBoardArgs } from '@/src/commons/types/generated/types';
import { gql, useQuery } from '@apollo/client';

const FETCH_BOARDS = gql`
	query fetchBoards {
		fetchBoards {
			_id
			writer
			title
			contents
			images
			likeCount
			createdAt
		}
	}
`;
export default function CommunityPageContainer() {
	const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardArgs>(FETCH_BOARDS);
	console.log(data?.fetchBoards);

	return <CommunityPagePresenter list={data?.fetchBoards ?? []} />;
}
