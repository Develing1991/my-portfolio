import styled from '@emotion/styled';

/* Select - start */
export const SelectStyled = styled.button`
	width: 100%;
	height: 40px;
	position: relative;
	border: 1px solid var(--color-primary-dp4);
	border-radius: 4px;
	font-weight: 700;
	font-size: var(--font-medium);
	color: var(--color-primary-dp4);
`;

export const SelectOptionGroup = styled.ul`
	max-width: 1200px;
	position: absolute;
	top: 39px;
	left: -1px;
	width: 101%;
	background-color: white;
	z-index: 9;

	border-radius: 4px;
	display: flex;

	margin: 0;
	padding: 0;
	border: 1px solid transparent;
	overflow: hidden;
	max-height: 0;

	&.show {
		transition: all 0.2s ease-in-out;
		max-height: 500px;
		margin-top: 2px;
		padding: 5px;
		border-color: var(--color-primary-dp4);
	}

	flex-direction: column;
	gap: 5px;
`;

export const SelectOption = styled.li`
	padding: 10px;
	border-radius: 4px;
	background-color: var(--color-primary-dp2);
	color: var(--color-primary-dp4);
	&:hover {
		color: var(--color-white);
		background-color: var(--color-primary-dp4);
	}
`;

/* Select - end */
