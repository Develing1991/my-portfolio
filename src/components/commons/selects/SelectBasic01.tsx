import { MouseEvent } from 'react';
import { SelectBasic, SelectBasicOptionGroup, SelectBasicOption } from './Select.styles.';
interface SelectBasic01Props {
	isShow: boolean;
	opts: string[];
	title?: string;
	onClickSelect: (event: MouseEvent<HTMLButtonElement>) => void;
	onClickSelectOption: (value: string) => (event: MouseEvent<HTMLLIElement>) => void;
}
export default function SelectBasic01({ title = '선택', isShow, opts = [], onClickSelect, onClickSelectOption }: SelectBasic01Props) {
	return (
		<SelectBasic onClick={onClickSelect}>
			{title}
			<SelectBasicOptionGroup isShow={isShow}>
				{opts.map((opt, index) => (
					<SelectBasicOption onClick={onClickSelectOption(opt)} key={`${opt}-${index}`}>
						{opt}
					</SelectBasicOption>
				))}
			</SelectBasicOptionGroup>
		</SelectBasic>
	);
}
