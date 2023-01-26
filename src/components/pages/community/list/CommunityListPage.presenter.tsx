import SearchInput from '@/src/components/commons/inputs/SearchInput';
import * as S from '@/src/components/pages/community/list/CommunityListPage.styles';
import { ICommunityPagePresenterProps } from './CommunityListPage.types';
import CommunityListItem from './components.presenter/CommunityListItem';
import CommunityListItemNotExist from './components.presenter/CommunityListItemNotExist';
import SideNavigation from './components.presenter/SideNavigation';

export default function CommunityPagePresenter({ list, keyword, onChangeKeyword }: ICommunityPagePresenterProps) {
	return (
		<>
			<section>
				<S.TopSectionInner>
					<S.AreaTitleDiv>
						<S.AreaTitle>커뮤니티</S.AreaTitle>
					</S.AreaTitleDiv>
					<S.AreaCompositionDiv>
						<S.CompositionGroup>
							<S.CompositionButton reverse>글쓰기</S.CompositionButton>
							<SearchInput width="80%" keyword={keyword} onChangeInput={onChangeKeyword} placeholder="제목으로 검색해주세요." />
						</S.CompositionGroup>
					</S.AreaCompositionDiv>
				</S.TopSectionInner>
			</section>
			<section>
				<S.BottSectionInner>
					<SideNavigation />
					<S.AreaContent>
						{list.length > 0 ? (
							list.map((el) => {
								return <CommunityListItem el={el} key={el._id} />;
							})
						) : (
							<CommunityListItemNotExist />
						)}
					</S.AreaContent>
				</S.BottSectionInner>
			</section>
		</>
	);
}
