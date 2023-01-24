import styled from '@emotion/styled';

export const Input = styled.input`
	border: 1px solid var(--color-primary-dp4);
	font-size: var(--font-large);
	color: var(--color-primary-dp4);
	font-weight: 400;
	padding: 10px;
	border-radius: 4px;
	width: 100%;

	&:focus {
		background-color: var(--color-primary-dp3);
		color: var(--color-white);
	}
	@media screen and (max-width: 480px) {
		font-size: var(--font-small);
	}
`;
