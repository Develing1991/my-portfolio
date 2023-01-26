import { IBoard } from '@/src/commons/types/generated/types';
import { timeFromNow } from '@/src/commons/utils/dayjs/dayjs';

import SearchInput from '@/src/components/commons/inputs/SearchInput';
import * as S from '@/src/components/pages/community/list/CommunityListPage.styles';
import { ChangeEvent, useState } from 'react';

interface IProps {
	list: IBoard[];
}
export default function CommunityPagePresenter({ list }: IProps) {
	const [keyword, setKeyword] = useState('');
	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setKeyword(() => event?.target.value);
	};
	console.log('hi');

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
						{list.length > 0 ? (
							list.map((el) => {
								return (
									<S.Card key={el._id}>
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
											{el.images && el.images.length > 0 && el.images[0] && (
												<S.CardRightImageDiv>
													<S.CardRightImage src={`https://storage.googleapis.com/${el.images[0]}`} />
												</S.CardRightImageDiv>
											)}
											<S.CardRightTime>{timeFromNow(el.createdAt)}</S.CardRightTime>
										</S.CardRight>
									</S.Card>
								);
							})
						) : (
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
						)}
					</S.AreaContent>
				</S.SectionInner>
			</section>
		</>
	);
}
