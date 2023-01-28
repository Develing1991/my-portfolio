import { SelectStyled, SelectOptionGroup, SelectOption } from './styles';
import { SelectProps } from './types';
import { useEffect } from 'react';

export default function Select({ title = '선택', isShow, opts = [], hideSelect, onClickSelect, onClickSelectOption }: SelectProps) {
	useEffect(() => {
		window.addEventListener('click', function () {
			hideSelect();
		});
		window.addEventListener('resize', () => {
			hideSelect();
		});
	});
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
