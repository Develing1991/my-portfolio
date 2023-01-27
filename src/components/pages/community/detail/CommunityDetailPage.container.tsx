import { IQuery, IQueryFetchBoardArgs } from '@/src/commons/types/generated/types';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_BOARD } from '../list/CommunityListPage.queries';
import CommunityDetailPagePresenter from './CommunityDetailPage.presenter';

export default function CommunityDetailPageContainer() {
	const { query } = useRouter();
	const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, { variables: { boardId: String(query.id) } });
	console.log(data?.fetchBoard);

	return <>{data?.fetchBoard && <CommunityDetailPagePresenter board={data?.fetchBoard} />}</>;
}
