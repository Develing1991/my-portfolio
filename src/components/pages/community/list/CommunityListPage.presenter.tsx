import SearchInput from '@/src/components/commons/inputs/SearchInput';
import * as S from '@/src/components/pages/community/list/CommunityListPage.styles';

import { ChangeEvent, useState } from 'react';
export default function CommunityPagePresenter() {
	const [keyword, setKeyword] = useState('');
	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setKeyword(() => event?.target.value);
	};
	return (
		<>
			<aside>
				<S.AsideInner>
					<S.AreaTitleDiv>
						<S.AreaTitle>커뮤니티</S.AreaTitle>
					</S.AreaTitleDiv>
					<S.AreaCompositionDiv>
						<S.CompositionGroup>
							<S.CompositionButton reverse>글쓰기</S.CompositionButton>
							<SearchInput width="80%" keyword={keyword} onChangeInput={onChangeInput} placeholder="제목으로 검색해주세요." />
						</S.CompositionGroup>
					</S.AreaCompositionDiv>
				</S.AsideInner>
			</aside>
			<section>
				<S.SectionInner>
					<S.Navigation>
						<S.NaviMenu>
							<S.NaviMenuItem>
								<S.NaviMenuItemText>궁금해요</S.NaviMenuItemText>
							</S.NaviMenuItem>
							<S.NaviMenuItem>
								<S.NaviMenuItemText>자유주제</S.NaviMenuItemText>
							</S.NaviMenuItem>
							<S.NaviMenuItem>
								<S.NaviMenuItemText>프로젝트</S.NaviMenuItemText>
							</S.NaviMenuItem>
							<S.NaviMenuItem>
								<S.NaviMenuItemText>기타</S.NaviMenuItemText>
							</S.NaviMenuItem>
						</S.NaviMenu>
					</S.Navigation>
					<S.AreaContent>
						<S.Card>
							<S.CardLeft>
								<S.CardLeftTitle>통신판매 중개자로서 통신판매의</S.CardLeftTitle>
								<S.CardLeftContents>
									(주)브레이브 모바일은 통신판매 중개자로서 통신판매의 당사자가 아니며 개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.
									(주)브레이브 모바일은 통신판매 중개자로서 통신판매의 당사자가 아니며 개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.
								</S.CardLeftContents>
								<S.CardLeftIconDiv>
									<S.CardLeftLikeIcon />
									<S.CounteText>31</S.CounteText>
									<S.CardLeftCommentIcon />
									<S.CounteText>1220</S.CounteText>
								</S.CardLeftIconDiv>
							</S.CardLeft>
							<S.CardRight>
								<S.CardRightImageDiv>
									<S.CardRightImage src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162303132447303472.jpeg?gif=1&w=640&h=640&c=c&webp=1" />
								</S.CardRightImageDiv>
								<S.CardRightTime>52분전</S.CardRightTime>
							</S.CardRight>
						</S.Card>
						{/* 목록 없을 시  */}
						<S.PostNotExist>
							<S.PostNotExistTop>
								<p>게시글 목록이 없습니다.</p>
							</S.PostNotExistTop>
							<S.PostNotExistBottom>
								<p>새 글을 작성해 보시는 건 어떠신가요?</p>
								<S.PostNotExistSmileIcon />
							</S.PostNotExistBottom>
						</S.PostNotExist>
					</S.AreaContent>
				</S.SectionInner>
			</section>
		</>
	);
}
