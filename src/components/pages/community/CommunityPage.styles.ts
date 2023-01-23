import { globalColor } from '@/src/commons/styles/color.styles';
import { globalFontSize } from '@/src/commons/styles/font.styles';
import styled from '@emotion/styled';
import { Button } from '../../commons/Button';
import Input01 from '../../commons/Input';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';

/* TOP */
export const SectionInner = styled.div`
	display: flex;
	padding-top: 100px;
	align-items: center;
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
	font-size: ${globalFontSize.xxlarge};
	color: ${globalColor.primary_dp4};
	@media screen and (max-width: 480px) {
		font-size: ${globalFontSize.xlarge};
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
export const CompositionButton = styled(Button)`
	width: 100px;
	&:hover {
		background-color: ${globalColor.white};
		border-color: ${globalColor.primary_dp4};
	}
	@media screen and (max-width: 480px) {
		font-size: ${globalFontSize.small};
		width: 80px;
	}
`;

// SearchIcon
export const CompositionInput = styled(Input01)``;

/* CONTENT */
export const SectionInner2 = styled.div`
	display: flex;
	padding-top: 50px;
	align-items: flex-start;
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
			background-color: ${globalColor.primary_dp3};
		}
	}
	@media screen and (max-width: 480px) {
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;
export const NaviMenuItem = styled.li`
	border: 2px solid ${globalColor.primary_dp3};
	cursor: pointer;
	color: ${globalColor.primary_dp4};
	font-size: ${globalFontSize.large};
	font-weight: bold;

	border-radius: 4px;
	padding: 20px 40px;
	margin-bottom: 10px;
	&:last-child {
		margin-bottom: 0;
	}
	&:hover {
		color: ${globalColor.white};
		background-color: ${globalColor.primary_dp3};
		border-color: ${globalColor.primary_dp4};
	}
	@media screen and (max-width: 800px) {
		margin: 0;
		padding: 10px 20px;
		font-size: ${globalFontSize.medium};
	}
	@media screen and (max-width: 480px) {
		margin: 0;
		padding: 5px 15px;
		font-size: ${globalFontSize.small};
	}
`;
export const NaviMenuItemText = styled.a``;

export const AreaContent = styled.article`
	flex-basis: 80%;
	padding: 20px 0 0 40px;
	@media screen and (max-width: 800px) {
		padding: 30px 0px 0 0px;
		word-break: break-all;
	}
`;
export const Card = styled.div`
	padding: 30px 30px 10px 30px;
	background-color: ${globalColor.primary_dp2};

	margin-bottom: 30px;
	border-radius: 4px;
	cursor: pointer;

	line-height: 1.4;
	font-size: ${globalFontSize.medium};
	color: ${globalColor.primary_dp4};

	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 800px) {
		font-size: ${globalFontSize.small};
	}
	@media screen and (max-width: 480px) {
		padding: 15px 10px;
	}
`;
export const CardLeft = styled.div``;
export const CardLeftTitle = styled.p`
	font-weight: 700;
	margin-bottom: 10px;
`;
export const CardLeftContents = styled.p`
	margin-bottom: 30px;
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
	font-size: ${globalFontSize.small};
	color: ${globalColor.primary_dp4};
	font-weight: bold;
	@media screen and (max-width: 480px) {
		font-size: ${globalFontSize.xsmall};
	}
`;
export const CardLeftCommentIcon = styled(MessageIcon)`
	width: 20px;
	height: 20px;
	margin-left: 20px;
`;

export const CardRight = styled.div`
	margin: 10px 20px;
	@media screen and (max-width: 480px) {
		display: none;
	}
`;
export const CardRightImageDiv = styled.div`
	width: 60px;
	height: 60px;
	margin-top: 10px;
	border-radius: 4px;
	border: 1px solid ${globalColor.primary_dp4};
	background-color: black;
	overflow: hidden;
`;
export const CardRightImage = styled.img`
	width: 100%;
	height: 100%;
`;

export const CardRightTime = styled.p`
	margin-top: 30px;
`;
