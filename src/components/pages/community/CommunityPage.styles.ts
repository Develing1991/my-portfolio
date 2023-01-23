import { globalColor } from '@/src/commons/styles/color.styles';
import { globalFontSize } from '@/src/commons/styles/font.styles';
import styled from '@emotion/styled';
import { Button } from '../../commons/Button';
import Input01 from '../../commons/Input';

export const SectionInner = styled.div`
	display: flex;
	padding: 30px 20px 0px 20px;
	align-items: center;
`;
export const AreaTitleDiv = styled.div`
	flex-basis: 20%;
	/* display: flex;
	align-items: center;
	justify-content: center; */
`;
export const AreaTitle = styled.h1`
	font-weight: 700;
	font-size: ${globalFontSize.xxlarge};
	color: ${globalColor.primary_dp4};
`;

export const AreaCompositionDiv = styled.div`
	flex-basis: 80%;
`;
export const CompositionGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 20px;
`;
export const CompositionButton = styled(Button)`
	width: 100px;
	&:hover {
		background-color: ${globalColor.white};
		border-color: ${globalColor.primary_dp4};
	}
`;

// SearchIcon
export const CompositionInput = styled(Input01)``;
