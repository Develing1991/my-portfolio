import styled from '@emotion/styled';
import { globalColor } from '@/src/commons/styles/color.styles';
import { globalFontSize } from '@/src/commons/styles/font.styles';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '../../commons/Button';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = styled.header``;

export const InnerHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 0;
	position: relative;
	background-color: ${globalColor.primary_dp3};
	border: 2px solid ${globalColor.primary_dp4};
	border-top: none;
	border-radius: 0 0 7px 7px;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		padding: 0 10px 10px 10px;
	}
`;

export const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: stretch;
		width: 100%;
		margin-bottom: 15px;
	}
`;

export const LogoDiv = styled.div``;

export const LogoIcon = styled(StarIcon)`
	width: 70px;
	height: 70px;
	display: block;
	color: orange;
	cursor: pointer;
	margin-left: 10px;
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
		display: ${({ show }: { show: boolean }) => (show ? 'block' : 'none')};
	}
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
	@media screen and (max-width: 800px) {
		padding: 0px;
		text-align: center;
		margin: 0 0 5px 0;
		&:first-child {
			margin-top: 5px;
		}
		&:last-child {
			margin: 0px;
		}
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
	@media screen and (max-width: 800px) {
		display: block;
	}
`;

// right
export const HeaderRight = styled.div`
	display: flex;
	align-items: center;
	padding: 0 25px;
	gap: 25px;
	@media screen and (max-width: 800px) {
		border-top: 2px dashed ${globalColor.white};
		flex-direction: column;
		align-items: stretch;
		width: 100%;
		padding: 0;
		padding-top: 5px;
		gap: 10px;
		display: ${({ show }: { show: boolean }) => (show ? 'block' : 'none')};
	}
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
	@media screen and (max-width: 800px) {
		display: none;
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

export const CustomButton = styled(Button)`
	@media screen and (max-width: 800px) {
		width: 100%;
		display: block;
		margin: 10px 0;
	}
`;

export const ToggleButton = styled(MenuIcon)`
	position: absolute;
	display: none;
	top: 8px;
	right: 15px;
	@media screen and (max-width: 800px) {
		display: block;
	}
`;
