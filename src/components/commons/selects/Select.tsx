import { SelectStyled, SelectOptionGroup, SelectOption } from './styles';
import { SelectProps } from './types';

export default function Select({ title = '선택', isShow, opts = [], onClickSelect, onClickSelectOption }: SelectProps) {
	return (
		<SelectStyled onClick={onClickSelect}>
			{title}
			<SelectOptionGroup className={isShow ? 'show' : ''}>
				{opts.map((opt, index) => (
					<SelectOption onClick={onClickSelectOption(opt)} key={`${opt}-${index}`}>
						{opt}
					</SelectOption>
				))}
			</SelectOptionGroup>
		</SelectStyled>
	);
}
