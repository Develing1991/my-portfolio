import styled from '@emotion/styled';
import { Inner } from '@/src/commons/styles/globalStyled.styled';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { HoverButton } from '@/src/components/commons/buttons/HoverButton';

export const Header = styled.header``;

export const InnerHeader = styled.div`
	${Inner}
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 0;
	position: relative;
	color: var(--color-white);
	background-color: var(--color-primary-dp3);
	border: 2px solid var(--color-primary-dp4);
	border-top: none;
	border-radius: 0 0 7px 7px;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		padding: 0 10px 0 10px;
		/* position: fixed;
		width: 100%;
		z-index: 9; */
	}
`;

export const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: stretch;
		width: 100%;
	}
`;

export const LogoDiv = styled.div``;

export const LogoImage = styled.img`
	width: 70px;
	height: 70px;
	display: block;
	color: orange;
	cursor: pointer;
	margin-left: 10px;
	&:hover {
		transition: 1s;
		transform: rotateY(180deg);
	}
	@media screen and (max-width: 800px) {
		width: 30px;
		height: 30px;
		margin: 5px 0 5px 0;
	}
`;

export const Menu = styled.ul`
	display: flex;
	margin-left: 15px;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		margin: 0;
		padding: 0;
		&.hide {
			display: none;
		}
	}
`;

export const MenuItem = styled.li`
	padding: 20px 0px;
	margin-right: 10px;
	font-size: var(--font-large);
	font-weight: 700;
	color: var(--color-primary-dp4);
	cursor: pointer;

	border: 2px solid transparent;
	border-radius: 4px;
	&:last-child {
		margin-right: 0;
	}

	& a {
		padding: 8px;
		color: var(--color-primary-dp4);
	}
	&:hover a {
		color: var(--color-white);
	}

	&.active a {
		color: var(--color-white);
	}
	@media screen and (max-width: 800px) {
		padding: 10px 0;
		text-align: center;
		margin: 0 0 10px 0;
		&:hover {
			border: 2px solid var(--color-white);
		}
		&:first-of-type {
			margin-top: 10px;
		}
		&:last-child {
			margin: 0 0 10px 0;
		}
	}
`;

// right
export const HeaderRight = styled.div`
	display: flex;
	align-items: center;
	padding: 0 25px;
	gap: 15px;
	@media screen and (max-width: 800px) {
		border-top: 2px dashed var(--color-white);
		flex-direction: column;
		align-items: stretch;
		width: 100%;
		padding: 0;
		padding-top: 5px;

		gap: 0px;
		&.hide {
			display: none;
		}
	}
`;

export const BasketDiv = styled.div`
	width: 40px;
	height: 40px;
	margin-right: 10px;
	background-color: var(--color-primary-dp4);
	border-radius: 50%;
	position: relative;
	cursor: pointer;
	&:hover {
		transition: all 0.2s ease-in;
		transform: scale(1.15);
	}
	@media screen and (max-width: 800px) {
		display: none;
	}
`;

export const BasketIcon = styled(ShoppingCartCheckoutIcon)`
	width: 23px;
	height: 23px;
	color: var(--color-primary-dp2);
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
`;

export const CustomButton = styled(HoverButton)`
	@media screen and (max-width: 800px) {
		width: 100%;
		display: block;
		margin: 8px 0;

		&:first-of-type {
			margin-top: 10px;
		}
		&:last-of-type {
			margin-bottom: 15px;
		}
	}
`;

export const ToggleIcon = styled(MenuIcon)`
	position: absolute;
	display: none;
	top: 5px;
	right: 15px;
	width: 30px;
	height: 30px;
	color: var(--color-primary-dp4);
	@media screen and (max-width: 800px) {
		display: block;
	}
`;
