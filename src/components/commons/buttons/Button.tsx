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
`;

interface ButtonProps {
	reverse: boolean;
	hide: boolean;
	fontSize: string;
}
type IButtonProps = Partial<ButtonProps>;
