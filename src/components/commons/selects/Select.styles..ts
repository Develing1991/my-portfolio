import styled from '@emotion/styled';

export const SelectBasic = styled.button`
	width: 100%;
	height: 40px;
	position: relative;
	border: 1px solid var(--color-primary-dp4);
	border-radius: 4px;
	font-weight: 700;
	font-size: var(--font-medium);
	color: var(--color-primary-dp4);
`;

export const SelectBasicOptionGroup = styled.ul`
	max-width: 1200px;
	position: absolute;
	top: 39px;
	left: -1px;
	width: 101%;
	background-color: white;
	z-index: 9;

	border: 1px solid var(--color-primary-dp4);
	border-radius: 4px;
	margin-top: 2px;

	padding: 5px;
	/* display: flex; */
	display: ${({ isShow }: { isShow: boolean }) => (isShow ? 'flex' : 'none')};
	flex-direction: column;
	gap: 5px;
`;

export const SelectBasicOption = styled.li`
	padding: 10px;
	border-radius: 4px;
	background-color: var(--color-primary-dp2);
	color: var(--color-primary-dp4);
	&:hover {
		color: var(--color-white);
		background-color: var(--color-primary-dp4);
	}
`;
