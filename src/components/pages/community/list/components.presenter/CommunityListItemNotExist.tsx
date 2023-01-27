import * as S from '@/src/components/pages/community/list/CommunityListPage.styles';
import { memo } from 'react';

const CommunityListItemNotExist = () => {
	// console.log('검색결과가 있을 때 다시 렌더링 하지 않음');

	return (
		<S.PostNotExist>
			{/* 목록 없을 시  */}
			<S.PostNotExistTop>
				<p>게시글 목록이 없습니다.</p>
			</S.PostNotExistTop>
			<S.PostNotExistBottom>
				<p>새 글을 작성해 보시는 건 어떠신가요?</p>
				<S.PostNotExistSmileIcon />
			</S.PostNotExistBottom>
		</S.PostNotExist>
	);
};

export default memo(CommunityListItemNotExist);