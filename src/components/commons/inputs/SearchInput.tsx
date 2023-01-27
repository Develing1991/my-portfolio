import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import { ChangeEvent, RefObject } from 'react';
import { Input } from './Input';

// Component
export default function SearchInput({ width, keyword = '', placeholder = '통합검색', onChangeInput, keywordInputRef, onClickInit }: InputProps) {
	return (
		<SeachInputDiv width={!width ? '100%' : width}>
			<PrependIcon />
			<SearchInputStyled onChange={onChangeInput} placeholder={placeholder} ref={keywordInputRef} />
			<AppendIcon showclose={keyword.length > 0 ? 'block' : 'none'} onClick={onClickInit} />
		</SeachInputDiv>
	);
}

// Type
interface InputProps {
	width?: string;
	keyword?: string;
	placeholder?: string;
	onChangeInput?: (event: ChangeEvent<HTMLInputElement>) => void;
	onClickInit?: () => void;
	keywordInputRef: RefObject<HTMLInputElement>;
	// keyfress enter도 추가해야함
}

// Styled Component
export const SeachInputDiv = styled.div`
	position: relative;
	width: ${({ width }: { width: string }) => width};
	@media screen and (max-width: 480px) {
		width: 100%;
	}
`;

export const SearchInputStyled = styled(Input)`
	font-weight: 700;
	padding: 10px 40px;
	&::placeholder {
		font-weight: 400;
		opacity: 0.8;
	}
	@media screen and (max-width: 480px) {
		padding: 10px 30px;
	}
`;

export const PrependIcon = styled(SearchIcon)`
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

export const AppendIcon = styled(CloseIcon)`
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
