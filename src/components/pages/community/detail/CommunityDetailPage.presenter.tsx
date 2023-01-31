import { timeFromNow } from '@/src/commons/utils/dayjs/dayjs';
import { checkImageFileExtension } from '@/src/commons/utils/validations/image';
import DropDown from '@/src/components/commons/dropdowns/DropDown';
import { useMemo } from 'react';
import * as S from './CommunityDetailPage.styles';
import { sanitize } from 'dompurify';
import CommentList from './components.presenter/CommentList';
import { ICommunityDetailPagePresenterProps } from './CommunityDetailPage.types';

export default function CommunityDetailPagePresenter({ board, onClickLikeBoard }: ICommunityDetailPagePresenterProps) {
	const time = useMemo(() => {
		return timeFromNow(board?.createdAt);
	}, []);
	return (
		<section>
			<S.SectionInner>
				{/* head */}
				<S.PostHeaderContainer>
					<S.Breadcrumbs>
						<li>
							<a href="">커뮤니티</a>
							<S.BreadcrumbsIcon className="arrow" />
						</li>
						<li>
							<a href="">궁금해요</a>
							<S.BreadcrumbsIcon className="arrow" />
						</li>
					</S.Breadcrumbs>
					<S.PostTitle>제목</S.PostTitle>
					<S.WriterInfoWrapper>
						<div className="image__wrapper">
							<img src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg" alt="유저 프로필 이미지" />
						</div>
						<S.PostInfo>
							<div className="info__name">{board.writer}</div>
							<div className="info__etc">
								<div>{time}</div>
								<div>조회수 10</div>
							</div>
						</S.PostInfo>
						<S.PostActions>
							<S.ShareLinkIcon className="link-icon" titleAccess="공유버튼 아이콘" />
							<S.MoreActionWrapper>
								<DropDown
									data={[
										{ title: '수정', eventName: () => {} },
										{ title: '삭제', eventName: () => {} },
										{ title: '신고', eventName: () => {} }
									]}
								>
									<S.MoreActionIcon className="more-icon" titleAccess="더 보기 액션 아이콘" />
								</DropDown>
							</S.MoreActionWrapper>
						</S.PostActions>
					</S.WriterInfoWrapper>
				</S.PostHeaderContainer>
				{/* contents */}
				<S.PostBodyContainer>
					{typeof window !== 'undefined' ? <S.Contents dangerouslySetInnerHTML={{ __html: sanitize(board.contents) }} /> : <S.Contents dangerouslySetInnerHTML={{ __html: board.contents }} />}
					<S.ContentsImageArea>
						{board.images?.map((el, index) => {
							return (
								<div className="image__wrapper" key={index}>
									{checkImageFileExtension(el) && <img src={`https://storage.googleapis.com/${el}`} />}
								</div>
							);
						})}
					</S.ContentsImageArea>
					<S.ContentsHashArea>
						<li>#태그1</li>
						<li>#태그2</li>
					</S.ContentsHashArea>
					<S.ContentsReactArea>
						<div className="like">
							<S.LikeIcon className="like-icon" onClick={onClickLikeBoard} /> {board.likeCount}
						</div>
						<div className="count">
							<S.CommentIcon className="comment-icon" /> 30
						</div>
					</S.ContentsReactArea>
				</S.PostBodyContainer>
				{/* comment */}
				<CommentList />
			</S.SectionInner>
		</section>
	);
}
