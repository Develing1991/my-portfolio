import { IBoard } from '@/src/commons/types/generated/types';
import SearchInput from '@/src/components/commons/inputs/SearchInput';
import * as S from '@/src/components/pages/community/list/CommunityListPage.styles';

import CommunityListItem from './components.presenter/CommunityListItem';
import CommunityListItemNotExist from './components.presenter/CommunityListItemNotExist';

interface IProps {
	list: IBoard[];
	keyword: string;
	onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function CommunityPagePresenter({ list, keyword, onChangeKeyword }: IProps) {
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
							<SearchInput width="80%" keyword={keyword} onChangeInput={onChangeKeyword} placeholder="제목으로 검색해주세요." />
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
								return <CommunityListItem el={el} key={el._id} />;
							})
						) : (
							<CommunityListItemNotExist />
						)}
					</S.AreaContent>
				</S.SectionInner>
			</section>
		</>
	);
}
