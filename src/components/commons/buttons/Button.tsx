import styled from '@emotion/styled';

export const Button = styled.button`
	display: ${({ hide }) => (hide ? 'none' : 'block')};
	border: 1px solid var(--color-primary-dp1);
	padding: 7px 10px;
	border-radius: 4px;
	background-color: ${({ reverse }: IButtonProps) => (reverse ? `var(--color-primary-dp4)` : `var(--color-primary-dp1)`)};
	color: ${({ reverse }: IButtonProps) => (reverse ? `var(--color-primary-dp1)` : `var(--color-primary-dp4)`)};
	font-size: ${({ fontSize = '' }) => (fontSize ? `${fontSize}px` : `var(--font-medium)`)};
	font-weight: 700;

	cursor: ${({ disabled }: IButtonProps) => (disabled ? `default` : `pointer`)};
	color: ${({ disabled }: IButtonProps) => (disabled ? `var(--color-primary-dp3)` : `var(--color-primary-dp1)`)};
	background-color: ${({ disabled }: IButtonProps) => (disabled ? `var(--color-primary-dp1)` : `var(--color-primary-dp4)`)};
`;

interface ButtonProps {
	reverse: boolean;
	disabled: boolean;
	hide: boolean;
	fontSize: string;
}
type IButtonProps = Partial<ButtonProps>;
