import styled from '@emotion/styled';
import { globalColor } from '@/src/commons/styles/color.styles';
import { globalFontSize } from '@/src/commons/styles/font.styles';

// font-size: ${({ size = 'red' }: { size: string }) => globalFontSize[size]};
export const H1Tag = styled.h1`
	color: ${({ color = 'red' }: { color: string; fsize: string }) => globalColor[color]};

	font-size: ${({ fsize }: { color: string; fsize: string }) => globalFontSize[fsize]};
`;
