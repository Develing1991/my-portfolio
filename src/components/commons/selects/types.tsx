import { MouseEvent } from 'react';
export interface SelectProps {
	isShow: boolean;
	opts: string[];
	title?: string;
	onClickSelect: (event: MouseEvent<HTMLButtonElement>) => void;
	onClickSelectOption: (value: string) => (event: MouseEvent<HTMLLIElement>) => void;
}
