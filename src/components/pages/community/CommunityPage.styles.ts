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
`;

export const AreaCompositionDiv = styled.div`
	flex-basis: 80%;
	padding-left: 40px;
`;
export const CompositionGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 30px;
`;
export const CompositionButton = styled(Button)`
	width: 100px;
	&:hover {
		background-color: ${globalColor.white};
		border-color: ${globalColor.primary_dp4};
	}
`;

// SearchIcon
export const CompositionInput = styled(Input01)``;

/* CONTENT */
export const SectionInner2 = styled.div`
	display: flex;
	padding-top: 50px;
	align-items: flex-start;
`;

export const Navigation = styled.nav`
	flex-basis: 20%;
`;
export const NaviMenu = styled.ul`
	padding: 10px 10px 10px 0;
	margin-top: 10px;
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
`;
export const NaviMenuItemText = styled.a``;

export const AreaContent = styled.article`
	flex-basis: 80%;
	padding: 20px 0 0 40px;
`;
export const Card = styled.div`
	border: 1px solid red;
	background-color: #bbbfca;
	padding: 20px 20px 10px 20px;
	border: 2px solid ${globalColor.primary_dp4};
	margin-bottom: 30px;
	border-radius: 10px;
	cursor: pointer;

	line-height: 1.4;
	font-size: ${globalFontSize.medium};
	color: ${globalColor.primary_dp4};

	display: flex;
	justify-content: space-between;

	&:hover {
		transition: 0.3s;
		transform: scale(1.02);
	}
`;
export const CardLeft = styled.div``;
export const CardLeftTitle = styled.p`
	font-weight: 700;
	margin-bottom: 10px;
`;
export const CardLeftContents = styled.p`
	margin-bottom: 30px;
	// 2줄 ...적용
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
`;

export const CardLeftLikeIcon = styled(ThumbUpOffAltIcon)``;
export const LikeCount = styled.span`
	align-self: flex-end;
	padding: 2px 10px;
	border-radius: 10px;
	margin-top: 5px;
	font-size: ${globalFontSize.small};
	background-color: ${globalColor.primary_dp4};
	color: white;
	font-weight: bold;
`;
export const CardLeftCommentIcon = styled(MessageIcon)`
	margin-left: 20px;
`;

export const CardRight = styled.div`
	margin: 10px 20px;
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
