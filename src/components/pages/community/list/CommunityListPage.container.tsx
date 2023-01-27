import CommunityPagePresenter from '@/src/components/pages/community/list/CommunityListPage.presenter';
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '@/src/commons/types/generated/types';
import { useApolloClient, useQuery } from '@apollo/client';
import { useCallback, ChangeEvent, useState, useRef } from 'react';
import { debounceKeyword, debouncePrefetch } from '@/src/commons/utils/lodash';
import { FETCH_BOARD, FETCH_BOARDS, FETCH_BOARDS_COUNT } from './CommunityListPage.queries';

export default function CommunityPageContainer() {
	const client = useApolloClient();
	const [keyword, setKeyword] = useState('');
	const { data, refetch, fetchMore } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);
	const { data: dataCount, refetch: countRefetch } = useQuery<Pick<IQuery, 'fetchBoardsCount'>, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);
	let currPage = Math.ceil((data?.fetchBoards.length ?? 0) / 10);
	const lastPage = Math.ceil((dataCount?.fetchBoardsCount ?? 0) / 10);
	const keywordInputRef = useRef<HTMLInputElement>(null);

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

	const onClickInit = () => {
		setKeyword('');
		if (keywordInputRef.current?.value) keywordInputRef.current.value = '';

		currPage = 1;
		refetch({
			page: currPage,
			search: ''
		});
		countRefetch({
			search: ''
		});
	};

	return (
		<>
			{data && (
				<CommunityPagePresenter
					list={data?.fetchBoards ?? []}
					keyword={keyword}
					onChangeKeyword={onChangeKeyword}
					onLoadMore={onLoadMore}
					onClickInit={onClickInit}
					onPrefetchBoard={onPrefetchBoard}
					keywordInputRef={keywordInputRef}
					currPage={currPage}
					lastPage={lastPage}
				/>
			)}
		</>
	);
}
