import * as S from '@/src/components/pages/community/list/CommunityListPage.styles';
import { memo } from 'react';
import { ICommunityListItemNotExistProps } from '../CommunityListPage.types';

const CommunityListItemNotExist = ({ prevText = '' }: ICommunityListItemNotExistProps) => {
	// console.log('검색결과가 있을 때 다시 렌더링 하지 않음');

	return (
		<S.PostNotExist>
			<S.PostNotExistTop>
				<p>{prevText}</p>
			</S.PostNotExistTop>
			<S.PostNotExistBottom>
				<p>새 글을 작성해 보시는 건 어떠신가요?</p>
				<S.PostNotExistSmileIcon />
			</S.PostNotExistBottom>
		</S.PostNotExist>
	);
};

export default memo(CommunityListItemNotExist);
