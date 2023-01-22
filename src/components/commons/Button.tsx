import { globalColor } from '@/src/commons/styles/color.styles';
import { globalFontSize } from '@/src/commons/styles/font.styles';
import styled from '@emotion/styled';
interface ButtonProps {
	reverse: boolean;
	hide: boolean;
}
type IButtonProps = Partial<ButtonProps>;

export const Button = styled.button`
	display: ${({ hide = false }) => (hide ? 'none' : 'block')};
	border: 1px solid ${globalColor.primary_dp1};
	padding: 7px 10px;
	border-radius: 4px;
	background-color: ${({ reverse }: IButtonProps) => (reverse ? globalColor.primary_dp4 : globalColor.primary_dp1)};
	color: ${({ reverse }: IButtonProps) => (reverse ? globalColor.primary_dp1 : globalColor.primary_dp4)};
	font-size: ${globalFontSize.medium};
	font-weight: 700;
	&:hover {
		transition: 0.3s;
		background-color: ${({ reverse }: IButtonProps) => (reverse ? globalColor.primary_dp1 : globalColor.primary_dp4)};
		color: ${({ reverse }: IButtonProps) => (reverse ? globalColor.primary_dp4 : globalColor.primary_dp1)};
	}
`;
