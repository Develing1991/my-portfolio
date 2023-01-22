import styled from '@emotion/styled';
import { globalColor } from '@/src/commons/styles/color.styles';
import { globalFontSize } from '@/src/commons/styles/font.styles';

import { Button } from '../../commons/Button';

export const Footer = styled.footer``;
export const InnerFooter = styled.div`
	background-color: ${globalColor.primary_dp3};
	color: ${globalColor.primary_dp4};
	font-weight: 700;
	padding: 10px 20px;

	border: 2px solid ${globalColor.primary_dp4};
	border-bottom: none;
	border-radius: 7px 7px 0 0;
`;
export const FooterTop = styled.div`
	border-bottom: 2px solid ${globalColor.primary_dp4};
`;
export const TermsMenu = styled.ul`
	display: flex;
	@media screen and (max-width: 480px) {
		flex-direction: column;
		& li {
			padding: 10px 0;
		}
		& li:last-child {
			margin-bottom: 10px;
		}
		& li:hover {
			transform: none;
			color: white;
		}
	}
`;
export const TermsMenuItem = styled.li`
	padding: 20px 5px;
	margin-right: 10px;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
	&:last-child {
		margin-right: 0;
	}
`;
export const TermsMenuItemText = styled.a`
	font-size: ${globalFontSize.regular};
`;

export const FooterBottom = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	gap: 10px;
	line-height: 1.4;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		margin-top: 10px;
	}
`;
export const CallCenterDiv = styled.div`
	flex-basis: 30%;
	padding: 10px;
	@media screen and (max-width: 800px) {
		width: 100%;
		padding: 10px 0;
	}
`;
export const CallNumberText = styled.p`
	font-size: ${globalFontSize.large};
	margin-bottom: 15px;
`;
export const UseTimeText = styled.p``;
export const ButtonGroup = styled.div`
	margin-top: 20px;
	display: flex;
	gap: 10px;
`;

export const AddressDiv = styled.div`
	flex-basis: 70%;
`;
export const AddresDivText = styled.p`
	margin-bottom: 5px;
`;

export const AlertText = styled(AddresDivText)`
	margin-bottom: 20px;
`;
export const AddressText = styled(AddresDivText)``;
export const BizNumerText = styled(AddresDivText)``;
export const CallCenterText = styled(AddresDivText)``;
export const CopyRightText = styled(AddresDivText)``;
export const Mb = styled(Button)`
	width: 100%;
`;

export const CustomButton = styled(Button)`
	font-size: ${globalFontSize.regular};
	width: 100%;
`;
