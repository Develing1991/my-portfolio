import styled from '@emotion/styled';
import { Inner } from '@/src/commons/styles/globalStyled.styled';
import { HoverButton } from '@/src/components/commons/buttons/HoverButton';

export const Footer = styled.footer``;

export const InnerFooter = styled.div`
	${Inner}
	background-color: var(--color-primary-dp3);
	color: var(--color-primary-dp4);
	font-weight: 700;
	padding: 10px 20px;
	border: 2px solid var(--color-primary-dp4);
	border-bottom: none;
	border-radius: 7px 7px 0 0;
	@media screen and (max-width: 320px) {
		padding: 10px;
	}
`;

export const FooterTop = styled.div`
	border-bottom: 2px solid var(--color-primary-dp4);
`;

export const TermsMenu = styled.ul`
	display: flex;
	@media screen and (max-width: 520px) {
		flex-direction: column;
		/* & li {
			padding: 10px 0;
		}
		& li:last-child {
			margin-bottom: 10px;
		}
		& li:hover {
			transform: none;
			color: white;
		} */
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
	@media screen and (max-width: 520px) {
		padding: 5px 0;
		&:last-child {
			margin-bottom: 10px;
		}
		&:hover {
			transform: none;
			color: white;
		}
	}
`;

export const TermsMenuItemText = styled.a`
	font-size: var(--font-medium);
	@media screen and (max-width: 520px) {
		font-size: var(--font-small);
	}
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
	@media screen and (max-width: 520px) {
		margin-top: 0px;
	}
`;

export const CallCenterDiv = styled.div`
	flex-basis: 30%;
	padding: 10px;
	@media screen and (max-width: 800px) {
		width: 100%;
		padding: 10px 0;
		font-size: var(--font-small);
	}
`;

export const CallNumberText = styled.p`
	font-size: var(--font-large);
	margin-bottom: 15px;
`;

export const UseTimeText = styled.p``;

export const ButtonGroup = styled.div`
	margin-top: 20px;
	display: flex;
	gap: 10px;
	@media screen and (max-width: 320px) {
		flex-direction: column;
	}
`;

export const AddressDiv = styled.div`
	flex-basis: 70%;
`;

export const AddresDivText = styled.p`
	margin-bottom: 5px;
	@media screen and (max-width: 520px) {
		font-size: var(--font-small);
	}
`;

export const AlertText = styled(AddresDivText)`
	margin-bottom: 20px;
`;

export const AddressText = styled(AddresDivText)``;

export const BizNumerText = styled(AddresDivText)``;

export const CallCenterText = styled(AddresDivText)``;

export const CopyRightText = styled(AddresDivText)``;

export const CustomButton = styled(HoverButton)`
	font-size: var(--font-medium);
	width: 100%;
`;
