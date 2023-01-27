import SearchInput from '@/src/components/commons/inputs/SearchInput';
import { LoadingBar } from '@/src/components/commons/loadings/Loading';
import * as S from '@/src/components/pages/community/list/CommunityListPage.styles';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroller';
import { ICommunityPagePresenterProps } from './CommunityListPage.types';
import CommunityListItem from './components.presenter/CommunityListItem';
import CommunityListItemNotExist from './components.presenter/CommunityListItemNotExist';
import SideNavigation from './components.presenter/SideNavigation';

export default function CommunityPagePresenter({ list, keyword, onChangeKeyword, onLoadMore, onClickInit, onPrefetchBoard, keywordInputRef, currPage, lastPage }: ICommunityPagePresenterProps) {
	return (
		<>
			<section>
				<S.TopSectionInner>
					<S.AreaTitleDiv>
						<S.AreaTitle>커뮤니티</S.AreaTitle>
					</S.AreaTitleDiv>
					<S.AreaCompositionDiv>
						<S.CompositionGroup>
							<Link href={`/community/write`}>
								<S.CompositionButton reverse>글쓰기</S.CompositionButton>
							</Link>
							<SearchInput width="80%" keyword={keyword} onChangeInput={onChangeKeyword} placeholder="제목으로 검색해주세요." onClickInit={onClickInit} keywordInputRef={keywordInputRef} />
						</S.CompositionGroup>
					</S.AreaCompositionDiv>
				</S.TopSectionInner>
			</section>
			<section>
				<S.BottSectionInner>
					<SideNavigation />
					<S.AreaContent>
						{list.length > 0 ? (
							<>
								<InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={currPage < lastPage} loader={<LoadingBar key={0} />}>
									{list.map((el) => {
										return <CommunityListItem el={el} key={el._id} onPrefetchBoard={onPrefetchBoard} />;
									})}
								</InfiniteScroll>
								{currPage === lastPage && <CommunityListItemNotExist prevText="게시글 목록의 끝입니다." />}
							</>
						) : (
							<CommunityListItemNotExist prevText="게시글 목록이 없습니다." />
						)}
					</S.AreaContent>
				</S.BottSectionInner>
			</section>
		</>
	);
}
