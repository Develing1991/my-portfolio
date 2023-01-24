import styled from '@emotion/styled';
interface ButtonProps {
	reverse: boolean;
	hide: boolean;
}
type IButtonProps = Partial<ButtonProps>;

export const ButtonBasic = styled.button`
	display: ${({ hide = false }) => (hide ? 'none' : 'block')};
	border: 1px solid var(--color-primary-dp1);
	padding: 7px 10px;
	border-radius: 4px;
	background-color: ${({ reverse }: IButtonProps) => (reverse ? `var(--color-primary-dp4)` : `var(--color-primary-dp1)`)};
	color: ${({ reverse }: IButtonProps) => (reverse ? `var(--color-primary-dp1)` : `var(--color-primary-dp4)`)};
	font-size: var(--font-medium);
	font-weight: 700;
`;

export const ButtonHover = styled(ButtonBasic)`
	&:hover {
		transition: 0.3s;
		background-color: ${({ reverse }: IButtonProps) => (reverse ? `var(--color-primary-dp1)` : `var(--color-primary-dp4)`)};
		color: ${({ reverse }: IButtonProps) => (reverse ? `var(--color-primary-dp4)` : `var(--color-primary-dp1)`)};
	}
`;
