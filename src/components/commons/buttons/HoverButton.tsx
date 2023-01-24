import styled from '@emotion/styled';
import { Button } from './Button';
export const HoverButton = styled(Button)`
	&:hover {
		transition: 0.3s;
		background-color: ${({ reverse }: IButtonProps) => (reverse ? `var(--color-primary-dp1)` : `var(--color-primary-dp4)`)};
		color: ${({ reverse }: IButtonProps) => (reverse ? `var(--color-primary-dp4)` : `var(--color-primary-dp1)`)};
	}
`;
interface ButtonProps {
	reverse: boolean;
	hide: boolean;
}
type IButtonProps = Partial<ButtonProps>;
