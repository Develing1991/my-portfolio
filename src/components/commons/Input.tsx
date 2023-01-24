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
	border: 1px solid var(--color-primary-dp4);
	font-size: var(--font-large);
	color: var(--color-primary-dp4);
	font-weight: 700;
	padding: 10px 40px;
	border-radius: 4px;
	width: 100%;

	&:focus {
		background-color: var(--color-primary-dp3);
		color: var(--color-white);
	}
	@media screen and (max-width: 480px) {
		padding: 10px 30px;
		font-size: var(--font-small);
	}
`;
export const InputCover = styled.div`
	position: relative;
	width: ${({ width }: { width: string }) => width};
	@media screen and (max-width: 480px) {
		width: 100%;
	}
`;

export const CustomSearchIcon = styled(SearchIcon)`
	width: 25px;
	height: 25px;
	color: var(--color-primary-dp4);
	position: absolute;
	left: 10px;
	top: 0;
	bottom: 0;
	margin: auto;
	cursor: pointer;
	@media screen and (max-width: 480px) {
		width: 20px;
		height: 20px;
	}
`;
export const CustomCloseIcon = styled(CloseIcon)`
	width: 25px;
	height: 25px;
	display: ${({ showclose }: { showclose: string }) => showclose};
	color: var(--color-primary-dp4);
	position: absolute;
	right: 10px;
	top: 0;
	bottom: 0;
	margin: auto;
	cursor: pointer;
	@media screen and (max-width: 480px) {
		width: 20px;
		height: 20px;
	}
`;
