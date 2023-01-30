import styled from '@emotion/styled';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import { Inner } from '@/src/commons/styles/globalStyled.styled';
import { HoverButton } from '@/src/components/commons/buttons/HoverButton';

import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

/* TOP */
export const TopSectionInner = styled.div`
	${Inner}
	display: flex;
	padding-top: 100px;
	align-items: center;
	max-width: 900px;
	@media screen and (max-width: 800px) {
		padding: 100px 10px 0 10px;
	}
	@media screen and (max-width: 480px) {
		flex-direction: column;
		padding-top: 40px;
		word-break: break-all;
	}
`;

export const AreaTitleDiv = styled.div`
	flex-basis: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const AreaTitle = styled.h1`
	font-weight: 700;
	font-size: var(--font-xxlarge);
	color: var(--color-primary-dp4);
	@media screen and (max-width: 480px) {
		font-size: var(--font-xlarge);
	}
`;

export const AreaCompositionDiv = styled.div`
	flex-basis: 80%;
	padding-left: 40px;
	@media screen and (max-width: 480px) {
		margin: 20px 0 0 0;
		width: 100%;
		padding: 0;
	}
`;

export const CompositionGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 30px;
	@media screen and (max-width: 480px) {
		gap: 15px;
	}
`;

export const CompositionButton = styled(HoverButton)`
	width: 100px;
	&:hover {
		background-color: var(--color-white);
		border-color: var(--color-primary-dp4);
	}
	@media screen and (max-width: 480px) {
		font-size: var(--font-small);
		width: 80px;
	}
`;

// SearchIcon
// export const CompositionInput = styled(Input01)``;

/* CONTENT */
export const BottSectionInner = styled.div`
	${Inner}
	display: flex;
	padding-top: 50px;
	align-items: flex-start;
	max-width: 900px;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		padding: 50px 10px 0 10px;
	}
	@media screen and (max-width: 480px) {
		padding-top: 30px;
	}
`;

export const Navigation = styled.nav`
	flex-basis: 20%;
	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const NaviMenu = styled.ul`
	padding: 10px 10px 10px 0;
	margin-top: 10px;
	@media screen and (max-width: 800px) {
		display: flex;
		gap: 10px;
		justify-content: flex-start;
		overflow-x: auto;
		&::-webkit-scrollbar {
			/* width: 10px; */
			height: 10px;
			background-color: var(--color-primary-dp3);
		}
	}
	@media screen and (max-width: 480px) {
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

export const NaviMenuItem = styled.li`
	border: 2px solid var(--color-primary-dp3);
	cursor: pointer;
	color: var(--color-primary-dp4);
	font-size: var(--font-large);
	font-weight: bold;
	border-radius: 4px;
	padding: 20px 40px;
	margin-bottom: 10px;
	&:last-child {
		margin-bottom: 0;
	}
	&:hover {
		color: var(--color-white);
		background-color: var(--color-primary-dp3);
		border-color: var(--color-primary-dp4);
	}
	@media screen and (max-width: 800px) {
		margin: 0;
		padding: 10px 20px;
		font-size: var(--font-medium);
	}
	@media screen and (max-width: 480px) {
		margin: 0;
		padding: 5px 15px;
		font-size: var(--font-small);
	}
`;

export const NaviMenuItemText = styled.a``;

export const AreaContent = styled.article`
	flex-basis: 80%;
	padding: 20px 0 0 40px;
	width: 100%;
	@media screen and (max-width: 800px) {
		padding: 30px 0px 0 0px;
		word-break: break-all;
	}
`;

export const PostNotExist = styled.div`
	font-size: var(--font-xxlarge);
	color: var(--color-primary-dp4);
	width: 100%;
	margin-top: 100px;

	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const PostNotExistTop = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const PostNotExistBottom = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	font-size: var(--font-xlarge);
`;

export const PostNotExistSmileIcon = styled(SentimentSatisfiedAltIcon)`
	font-size: 50px;
`;

export const Card = styled.div`
	padding: 20px;
	background-color: var(--color-primary-dp2);
	margin-bottom: 30px;
	border-radius: 4px;
	cursor: pointer;
	line-height: 1.4;
	font-size: var(--font-medium);
	color: var(--color-primary-dp4);
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 800px) {
		font-size: var(--font-small);
	}
	@media screen and (max-width: 480px) {
		padding: 15px 10px;
	}
`;

export const CardLeft = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CardLeftTitle = styled.p`
	font-weight: 700;
	margin-bottom: 10px;
`;

export const CardLeftContents = styled.p`
	margin-bottom: 30px;
	max-width: 650px;
	word-break: break-all;
	flex: 1;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

export const CardLeftIconDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	@media screen and (max-width: 130px) {
		display: none;
	}
`;

export const CardLeftLikeIcon = styled(ThumbUpOffAltIcon)`
	width: 20px;
	height: 20px;
`;

export const CounteText = styled.span`
	align-self: flex-end;
	font-size: var(--font-small);
	color: var(--color-primary-dp4);
	font-weight: bold;
	@media screen and (max-width: 480px) {
		font-size: var(--font-xsmall);
	}
`;

export const CardLeftCommentIcon = styled(MessageIcon)`
	width: 20px;
	height: 20px;
	margin-left: 20px;
`;

export const CardRight = styled.div`
	/* margin: 10px 20px; */
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 20px;
	@media screen and (max-width: 480px) {
		display: none;
	}
`;

export const CardRightImageDiv = styled.div`
	width: 60px;
	height: 60px;
	margin-top: 10px;
	border-radius: 4px;
	border: 1px solid var(--color-primary-dp4);
	background-color: var(--color-white);
	overflow: hidden;
`;

export const CardRightImage = styled.img`
	width: 100%;
	height: 100%;
`;

export const CardRightTime = styled.p`
	/* margin-top: 50px; */
`;
