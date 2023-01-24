import { globalColor } from '@/src/commons/styles/color.styles';
import { globalFontSize } from '@/src/commons/styles/font.styles';
import styled from '@emotion/styled';

export const SelectBasic = styled.button`
	width: 100%;
	height: 40px;
	position: relative;
	border: 1px solid ${globalColor.primary_dp4};
	border-radius: 4px;
	font-weight: 700;
	font-size: ${globalFontSize.medium};
	color: ${globalColor.primary_dp4};
`;

export const SelectBasicOptionGroup = styled.ul`
	max-width: 1200px;
	position: absolute;
	top: 39px;
	left: -1px;
	width: 101%;
	background-color: white;
	z-index: 9;

	border: 1px solid ${globalColor.primary_dp4};
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
	background-color: ${globalColor.primary_dp2};
	color: ${globalColor.primary_dp4};
	&:hover {
		color: ${globalColor.white};
		background-color: ${globalColor.primary_dp4};
	}
`;
