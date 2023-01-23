import { globalColor } from '@/src/commons/styles/color.styles';
import { globalFontSize } from '@/src/commons/styles/font.styles';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

interface InputProps {
	width?: string;
	keyword?: string;
	onChangeInput?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input01({ width, keyword = '', onChangeInput }: InputProps) {
	return (
		<InputCover width={!width ? '100%' : width}>
			<CustomSearchIcon />
			<CustomInput onChange={onChangeInput} />
			<CustomCloseIcon showclose={keyword.length > 0 ? 'block' : 'none'} />
		</InputCover>
	);
}

export const CustomInput = styled.input`
	border: 1px solid ${globalColor.primary_dp4};
	font-size: ${globalFontSize.large};
	color: ${globalColor.primary_dp4};
	font-weight: 700;
	padding: 10px 40px;
	border-radius: 4px;
	width: 100%;

	&:focus {
		background-color: ${globalColor.primary_dp3};
		color: ${globalColor.white};
	}
`;
export const InputCover = styled.div`
	position: relative;
	width: ${({ width }: { width: string }) => width};
`;

export const CustomSearchIcon = styled(SearchIcon)`
	width: 25px;
	height: 25px;
	color: ${globalColor.primary_dp4};
	position: absolute;
	left: 10px;
	top: 0;
	bottom: 0;
	margin: auto;
	cursor: pointer;
`;
export const CustomCloseIcon = styled(CloseIcon)`
	width: 25px;
	height: 25px;
	display: ${({ showclose }: { showclose: string }) => showclose};
	color: ${globalColor.primary_dp4};
	position: absolute;
	right: 10px;
	top: 0;
	bottom: 0;
	margin: auto;
	cursor: pointer;
`;
