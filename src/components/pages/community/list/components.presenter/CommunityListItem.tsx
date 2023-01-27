import * as S from '@/src/components/pages/community/list/CommunityListPage.styles';
import { timeFromNow } from '@/src/commons/utils/dayjs/dayjs';
import { ICommunityListItemProps } from '../CommunityListPage.types';
import { useMemo, memo } from 'react';
import { useRouter } from 'next/router';
import { checkImageFileExtension } from '@/src/commons/utils/validations/image';

const CommunityListItem = ({ el, onPrefetchBoard }: ICommunityListItemProps) => {
	const { push } = useRouter();

	const time = useMemo(() => {
		// console.log('검색결과가 바뀌면 프롭스가 바뀌니 10번 렌더링 되는데');
		// console.log('값을 리턴하는 함수도 재 생성되서 리렌더링이');
		// console.log('10번이 한번 더 실행되서 메모이제이션함');
		return timeFromNow(el.createdAt);
	}, []);
	const onClickMove = () => {
		push(`/community/detail/${el._id}`);
	};
	return (
		<S.Card onClick={onClickMove} onMouseOver={onPrefetchBoard(el._id)}>
			<S.CardLeft>
				<S.CardLeftTitle>{el.title}</S.CardLeftTitle>
				<S.CardLeftContents>{el.contents}</S.CardLeftContents>
				<S.CardLeftIconDiv>
					<S.CardLeftLikeIcon />
					<S.CounteText>{el.likeCount}</S.CounteText>
					<S.CardLeftCommentIcon />
					<S.CounteText>1</S.CounteText>
				</S.CardLeftIconDiv>
			</S.CardLeft>
			<S.CardRight>
				{el.images && el.images.length > 0 && checkImageFileExtension(el.images[0]) && (
					<S.CardRightImageDiv>
						<S.CardRightImage src={`https://storage.googleapis.com/${el.images[0]}`} alt="게시글 썸네일 이미지" />
					</S.CardRightImageDiv>
				)}
				<S.CardRightTime>{time}</S.CardRightTime>
			</S.CardRight>
		</S.Card>
	);
};
export default memo(CommunityListItem);
