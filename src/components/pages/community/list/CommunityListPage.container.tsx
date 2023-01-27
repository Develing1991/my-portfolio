import CommunityPagePresenter from '@/src/components/pages/community/list/CommunityListPage.presenter';
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '@/src/commons/types/generated/types';
import { useApolloClient, useQuery } from '@apollo/client';
import { useCallback, ChangeEvent, useState } from 'react';
import { debounceKeyword, debouncePrefetch } from '@/src/commons/utils/lodash';
import { FETCH_BOARD, FETCH_BOARDS, FETCH_BOARDS_COUNT } from './CommunityListPage.queries';

export default function CommunityPageContainer() {
	const client = useApolloClient();
	const [keyword, setKeyword] = useState('');
	const { data, refetch, fetchMore } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);
	const { data: dataCount, refetch: countRefetch } = useQuery<Pick<IQuery, 'fetchBoardsCount'>, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);
	const currPage = Math.ceil((data?.fetchBoards.length ?? 0) / 10);
	const lastPage = Math.ceil((dataCount?.fetchBoardsCount ?? 0) / 10);

	const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
		debounceKeyword(setKeyword, refetch, countRefetch, event.target.value);
	};

	const onLoadMore = () => {
		if (!data?.fetchBoards) return;
		fetchMore({
			variables: { search: keyword, page: currPage + 1 },

			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult.fetchBoards) {
					return {
						fetchBoards: [...prev.fetchBoards]
					};
				}
				return {
					fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
				};
			}
		});
	};

	const onPrefetchBoard = useCallback(
		(id: string) => async () => {
			debouncePrefetch(client, FETCH_BOARD, id);
		},
		[]
	);

	return (
		<>
			{data && (
				<CommunityPagePresenter
					list={data?.fetchBoards ?? []}
					keyword={keyword}
					onChangeKeyword={onChangeKeyword}
					onLoadMore={onLoadMore}
					onPrefetchBoard={onPrefetchBoard}
					currPage={currPage}
					lastPage={lastPage}
				/>
			)}
		</>
	);
}
