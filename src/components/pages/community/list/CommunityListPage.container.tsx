import CommunityPagePresenter from '@/src/components/pages/community/list/CommunityListPage.presenter';
import { IQuery, IQueryFetchBoardsArgs } from '@/src/commons/types/generated/types';
import { useApolloClient, useQuery } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import { debounceKeyword, debouncePrefetch } from '@/src/commons/utils/lodash';
import { FETCH_BOARD, FETCH_BOARDS } from './CommunityListPage.queries';

export default function CommunityPageContainer() {
	const { data, refetch, fetchMore } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS, {
		variables: {
			page: 1
		}
	});
	const client = useApolloClient();
	const [keyword, setKeyword] = useState('');
	// console.log(data?.fetchBoards);

	const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
		debounceKeyword(setKeyword, refetch, event.target.value);
	};

	const onLoadMore = () => {
		if (!data?.fetchBoards) return;
		fetchMore({
			variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
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

	const onPrefetchBoard = (id: string) => async () => {
		debouncePrefetch(client, FETCH_BOARD, id);
	};

	return <CommunityPagePresenter list={data?.fetchBoards ?? []} keyword={keyword} onChangeKeyword={onChangeKeyword} onLoadMore={onLoadMore} onPrefetchBoard={onPrefetchBoard} />;
}
