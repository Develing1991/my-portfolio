import styled from '@emotion/styled';
import { globalColor } from '@/src/commons/styles/color.styles';
import { globalFontSize } from '@/src/commons/styles/font.styles';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import StarIcon from '@mui/icons-material/Star';

export const Header = styled.header``;
export const Inner = styled.div`
	max-width: 1200px;
	margin: auto;
	background-color: ${globalColor.primary_dp3};
	border: 2px solid ${globalColor.primary_dp4};
	border-top: none;
	border-radius: 0 0 7px 7px;
`;
export const InnerHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 0;
`;

export const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
`;

export const LogoDiv = styled.div``;

export const LogoIcon = styled(StarIcon)`
	width: 70px;
	height: 70px;
	display: block;
	color: orange;
	cursor: pointer;
	margin-left: 10px;
`;

export const Menu = styled.ul`
	display: flex;
	margin-left: 15px;
`;

export const MenuItem = styled.li`
	padding: 25px 5px;
	margin-right: 5px;
	font-size: ${globalFontSize.large};
	font-weight: 700;
	color: ${globalColor.primary_dp4};
	cursor: pointer;
	&:last-child {
		margin-right: 0;
	}
	&:hover a {
		color: ${globalColor.white};
		border: 2px solid ${globalColor.white};
	}
`;
export const MenuItemText = styled.a`
	padding: 8px;
	border-radius: 4px;
	border: 2px solid transparent;
	&.active {
		color: ${globalColor.white};
		border: 2px solid ${globalColor.white};
	}
`;

// right
export const HeaderRight = styled.div`
	display: flex;
	align-items: center;
	padding: 0 25px;
	gap: 25px;
`;
export const BasketDiv = styled.div`
	width: 40px;
	height: 40px;
	margin-right: 10px;
	background-color: ${globalColor.primary_dp4};
	border-radius: 50%;
	position: relative;
	cursor: pointer;
	&:hover {
		transition: all 0.2s ease-in;
		transform: scale(1.15);
	}
`;
export const BasketIcon = styled(ShoppingCartCheckoutIcon)`
	width: 23px;
	height: 23px;
	color: ${globalColor.primary_dp2};
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
`;
