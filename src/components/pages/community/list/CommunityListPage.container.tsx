import CommunityPagePresenter from '@/src/components/pages/community/list/CommunityListPage.presenter';
import { IQuery, IQueryFetchBoardsArgs } from '@/src/commons/types/generated/types';
import { gql, useQuery } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import { debounceKeyword } from '@/src/commons/utils/lodash';
const FETCH_BOARDS = gql`
	query fetchBoards($page: Int, $search: String) {
		fetchBoards(page: $page, search: $search) {
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
	const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);
	const [keyword, setKeyword] = useState('');
	// console.log(data?.fetchBoards);

	const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
		debounceKeyword(setKeyword, refetch, event.target.value);
	};

	return <CommunityPagePresenter list={data?.fetchBoards ?? []} keyword={keyword} onChangeKeyword={onChangeKeyword} />;
}
