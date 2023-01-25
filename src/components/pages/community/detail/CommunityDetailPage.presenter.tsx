import React from 'react';
import * as S from './CommunityDetailPage.styles';

export default function CommunityDetailPagePresenter() {
	return (
		<section>
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
							<div className="info__name">김길동</div>
							<div className="info__etc">
								<div>15분 전</div>
								<div>조회수 10</div>
							</div>
						</S.PostInfo>
						<S.PostActions>
							<S.ShareLinkIcon className="link-icon" titleAccess="공유버튼 아이콘" />
							<S.MoreActionWrapper>
								<S.MoreActionIcon className="more-icon" titleAccess="더 보기 액션 아이콘" />
								<ul style={{ display: 'none' }}>
									<li>수정하기</li>
									<li>삭제하기</li>
									<li>신고하기</li>
								</ul>
							</S.MoreActionWrapper>
						</S.PostActions>
					</S.WriterInfoWrapper>
				</S.PostHeaderContainer>
				{/* body */}
				<S.PostBodyContainer>
					<S.Contents>내용스</S.Contents>
					<S.ContentsImageArea>
						<div className="image__wrapper">
							<img src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg" alt="내용이미지" />
						</div>
					</S.ContentsImageArea>
					<S.ContentsHashArea>
						<li>#태그1</li>
						<li>#태그2</li>
					</S.ContentsHashArea>
					<S.ContentsReactArea>
						<div className="like">
							<S.LikeIcon className="like-icon" /> 20
						</div>
						<div className="count">
							<S.CommentIcon className="comment-icon" /> 30
						</div>
					</S.ContentsReactArea>
				</S.PostBodyContainer>
				{/* comment */}
				<S.PostCommentContainer>
					<S.CommentWrite>
						<S.ContentTextArea />
						<S.CommentRegButton>등록</S.CommentRegButton>
					</S.CommentWrite>
					<S.CommentList>
						<S.CommentItem>
							<S.CommentUser>
								<div className="image__wrapper">
									<img src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg" alt="유저 프로필 이미지" />
								</div>
								<div className="name">리길동</div>
								<div className="time">10분 전</div>
							</S.CommentUser>
							<S.CommentContent>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, perferendis obcaecati eius fugit, tempora excepturi ullam tenetur animi dignissimos a inventore. Laudantium dolorum
								voluptatem culpa. Neque alias ipsam laborum quaerat?
							</S.CommentContent>
							<S.CommentReact>
								<div className="left">
									<div className="like">
										<S.LikeIcon className="like-icon" /> 3
									</div>
									<div className="count">
										<S.CommentIcon className="comment-icon" /> 0
									</div>
								</div>
								<div className="right">
									<S.MoreActionIcon className="more-icon" />
								</div>
							</S.CommentReact>
						</S.CommentItem>
						<S.CommentItem>
							<S.CommentUser>
								<div className="image__wrapper">
									<img src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg" alt="유저 프로필 이미지" />
								</div>
								<div className="name">리길동</div>
								<div className="time">10분 전</div>
							</S.CommentUser>
							<S.CommentContent>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, perferendis obcaecati eius fugit, tempora excepturi ullam tenetur animi dignissimos a inventore. Laudantium dolorum
								voluptatem culpa. Neque alias ipsam laborum quaerat?
							</S.CommentContent>
							<S.CommentReact>
								<div className="left">
									<div className="like">
										<S.LikeIcon className="like-icon" /> 3
									</div>
									<div className="count">
										<S.CommentIcon className="comment-icon" /> 0
									</div>
								</div>
								<div className="right">
									<S.MoreActionIcon className="more-icon" />
								</div>
							</S.CommentReact>
						</S.CommentItem>
					</S.CommentList>
				</S.PostCommentContainer>
			</S.SectionInner>
		</section>
	);
}
