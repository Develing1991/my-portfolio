import { Inner } from '@/src/commons/styles/globalStyled.styled';
import styled from '@emotion/styled';
// import ShareIcon from '@mui/icons-material/Share';
import LinkIcon from '@mui/icons-material/Link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import { Button } from '@/src/components/commons/buttons/Button';
export const LikeIcon = styled(ThumbUpOffAltIcon)``;
export const CommentIcon = styled(MessageIcon)``;
export const MoreActionIcon = styled(MoreVertIcon)``;
export const ShareLinkIcon = styled(LinkIcon)``;
export const BreadcrumbsIcon = styled(KeyboardArrowRightIcon)`
	cursor: default;
`;

export const SectionInner = styled.div`
	${Inner}
	max-width: 800px;
	@media screen and (max-width: 990px) {
		padding: 0 20px;
	}
	@media screen and (max-width: 800px) {
		padding: 0 30px;
	}
	@media screen and (max-width: 380px) {
		padding: 0 20px;
	}
`;

/* PostHeaderContainer */
export const PostHeaderContainer = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
export const Breadcrumbs = styled.ul`
	display: flex;
	font-size: var(--font-small);

	li {
		display: flex;
		position: relative;
		align-items: center;
		padding: 5px 0;
		cursor: pointer;

		a {
			color: var(--color-blue);
		}
		.arrow {
			font-size: var(--font-medium);
			margin: 0 10px;
		}
		&:last-child .arrow {
			display: none;
		}
	}
`;

export const PostTitle = styled.h1`
	font-size: var(--font-xlarge);
	font-weight: 700;
	color: var(--color-primary-dp4);
`;

export const WriterInfoWrapper = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	padding-bottom: 30px;
	border-bottom: 2px solid var(--color-primary-dp2);
	@media screen and (max-width: 200px) {
		flex-direction: column;
	}
	.image__wrapper {
		width: 50px;
		height: 50px;
		border-radius: 4px;
		overflow: hidden;
		cursor: pointer;
	}
	.image__wrapper img {
		max-width: 100%;
		height: 100%;
	}
`;

export const PostInfo = styled.div`
	font-size: var(--font-small);
	color: var(--color-primary-dp4);
	line-height: 1.5;

	flex: 1;
	.info__name {
		color: var(--color-purple);
		font-weight: 700;
		cursor: pointer;
	}
	.info__etc {
		display: flex;
		gap: 10px;
		@media screen and (max-width: 280px) {
			flex-direction: column;
		}
	}
`;

export const PostActions = styled.div`
	display: flex;
	gap: 20px;
	@media screen and (max-width: 520px) {
		flex-direction: column;
	}
	.link-icon {
		cursor: pointer;
		font-size: 30px;
	}
`;

export const MoreActionWrapper = styled.div`
	position: relative;
	.more-icon {
		cursor: pointer;
		font-size: 30px;
	}
`;

/* PostBodyContainer */
export const PostBodyContainer = styled.div`
	margin-top: 40px;
	border-radius: 4px;
	padding: 20px 20px 60px 20px;
	border-bottom: 2px solid var(--color-primary-dp2);

	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const Contents = styled.div``;

export const ContentsImageArea = styled.div`
	.image__wrapper {
		border-radius: 4px;
		overflow: hidden;
	}
	.image__wrapper img {
		max-width: 100%;
		height: 100%;
	}
`;

export const ContentsHashArea = styled.ul`
	display: flex;
	gap: 20px;
	@media screen and (max-width: 280px) {
		flex-direction: column;
	}
	li {
		padding: 10px;
		cursor: pointer;
		font-weight: 700;
		color: var(--color-purple);
	}
	li:hover {
		color: var(--color-blue);
	}
`;

export const ContentsReactArea = styled.div`
	display: flex;
	gap: 40px;
	font-size: var(--font-small);
	@media screen and (max-width: 280px) {
		flex-direction: column;
	}
	.like {
		.like-icon {
			font-size: var(--font-large);
			vertical-align: bottom;
			margin-right: 10px;
			cursor: pointer;
		}
	}
	.count {
		.comment-icon {
			font-size: var(--font-large);
			vertical-align: bottom;
			margin-right: 10px;
			cursor: pointer;
		}
	}
`;

/* components.presenter/Comment* */
export const PostCommentContainer = styled.div``;

export const CommentWrite = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;

	border-radius: 4px;
	padding: 30px 20px;
	margin-top: 50px;
	@media screen and (max-width: 420px) {
		gap: 20px;
	}
	@media screen and (max-width: 280px) {
		flex-direction: column;
		padding: 10px;
	}
`;

export const ContentTextArea = styled.textarea`
	flex-basis: 90%;
	height: 100px;
	width: 100%;
	border: 2px solid var(--color-primary-dp2);
	border-radius: 4px;
	padding: 15px 10px;
	font-size: var(--font-medium);
	@media screen and (max-width: 800px) {
		flex-basis: 80%;
	}
	&:focus {
		background-color: var(--color-primary-dp1);
	}
`;

export const CommentRegButton = styled(Button)`
	flex-basis: 10%;
	height: 100%;
	padding: 15px 0;
	background-color: var(--color-primary-dp4);
	overflow: hidden;
	color: white;
	position: relative;
	@media screen and (max-width: 800px) {
		flex-basis: 20%;
	}
	@media screen and (max-width: 280px) {
		width: 80%;
	}
	&:hover {
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: black;
			opacity: 0.2;
		}
	}
`;

export const CommentList = styled.ul`
	margin-top: 30px;
`;

export const CommentItem = styled.li`
	border-bottom: 2px solid var(--color-primary-dp3);
	margin-bottom: 10px;
	padding: 30px;
	@media screen and (max-width: 380px) {
		padding: 20px 10px;
	}
`;

export const CommentUser = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	@media screen and (max-width: 280px) {
		flex-direction: column;
		align-items: flex-start;
	}
	.image__wrapper {
		width: 50px;
		height: 50px;
		border-radius: 4px;
		overflow: hidden;
		cursor: pointer;
	}
	.image__wrapper img {
		max-width: 100%;
		height: 100%;
	}
	.name {
		color: var(--color-purple);
		font-size: var(--font-small);
		font-weight: 700;
		cursor: pointer;
	}
	.time {
		font-size: var(--font-small);
	}
`;

export const CommentContent = styled.p`
	line-height: 1.3;
	margin: 20px 0;
`;

export const CommentEditContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const CommentEditTextArea = styled.textarea`
	margin: 20px 0;
	height: 100px;
	width: 100%;
	border: 2px solid var(--color-primary-dp2);
	border-radius: 4px;
	padding: 15px 10px;
	font-size: var(--font-medium);
	flex: 5;
	&:focus {
		background-color: var(--color-primary-dp1);
	}
`;

export const CommentEditButtonContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;

	gap: 10px;
	height: 100%;
`;

export const CommentReact = styled.div`
	display: flex;
	justify-content: space-between;

	.left {
		display: flex;
		gap: 40px;
		font-size: var(--font-small);
		@media screen and (max-width: 280px) {
			flex-direction: column;
			gap: 10px;
		}
		.like {
			.like-icon {
				font-size: var(--font-large);
				vertical-align: bottom;
				margin-right: 10px;
				cursor: pointer;
			}
		}
		.count {
			.comment-icon {
				font-size: var(--font-large);
				vertical-align: bottom;
				margin-right: 10px;
				cursor: pointer;
			}
		}
	}

	.right {
		position: relative;
		.more-icon {
			font-size: var(--font-xlarge);
			vertical-align: bottom;
			margin-right: 10px;
			cursor: pointer;
		}
	}
`;
