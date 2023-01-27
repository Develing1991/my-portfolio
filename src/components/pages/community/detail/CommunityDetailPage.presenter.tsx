import { IBoard } from '@/src/commons/types/generated/types';
import { timeFromNow } from '@/src/commons/utils/dayjs/dayjs';
import { checkImageFileExtension } from '@/src/commons/utils/validations/image';
import DropDown from '@/src/components/commons/dropdowns/DropDown';
import Modal from '@/src/components/commons/modals/Modal';
import { useState, useMemo } from 'react';
import * as S from './CommunityDetailPage.styles';
import { sanitize } from 'dompurify';
import CommentList from './components.presenter/CommentList';

interface ICommunityDetailPagePresenterProps {
	board: IBoard;
	onClickLikeBoard: () => void;
}
export default function CommunityDetailPagePresenter({ board, onClickLikeBoard }: ICommunityDetailPagePresenterProps) {
	const [showModal, setShowModal] = useState(false);
	const onClickDeletePost = () => {
		setShowModal(() => true);
	};
	const onClick2 = () => {
		setShowModal(() => false);
	};
	const time = useMemo(() => {
		return timeFromNow(board?.createdAt);
	}, []);
	return (
		<section>
			<Modal isOpen={showModal} onClickConfirm={onClick2} isConfirm title="제목입니당." content="내용입니당" />
			<S.SectionInner>
				{/* header */}
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
										{ title: '수정', eventName: onClickDeletePost },
										{ title: '삭제', eventName: onClickDeletePost },
										{ title: '신고', eventName: onClickDeletePost }
									]}
								>
									<S.MoreActionIcon className="more-icon" titleAccess="더 보기 액션 아이콘" />
								</DropDown>
							</S.MoreActionWrapper>
						</S.PostActions>
					</S.WriterInfoWrapper>
				</S.PostHeaderContainer>
				{/* body */}
				<S.PostBodyContainer>
					<S.Contents dangerouslySetInnerHTML={{ __html: sanitize(board.contents) }} />
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
