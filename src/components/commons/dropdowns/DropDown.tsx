import styled from '@emotion/styled';
import { useState, useRef, useEffect, MouseEvent } from 'react';

interface IDropDown {
	children: JSX.Element;
	data: Array<{
		title: string;
		eventName: () => void;
	}>;
}
export default function DropDown({ children, data }: IDropDown) {
	const [show, setShow] = useState(false);
	const iconTarget = useRef<HTMLDivElement>(null);
	const [{ top, right }, setOffsetPosition] = useState({
		top: `0`,
		right: `0`
	});
	useEffect(() => {
		window.addEventListener('click', () => {
			setShow(() => false);
		});
		window.addEventListener('resize', () => {
			setShow(() => false);
		});
	});
	const onClickIcon = (event: MouseEvent<HTMLDivElement>) => {
		const IconWidth = iconTarget.current?.clientWidth;
		// state 변경 태스크 큐 활용
		setShow(() => false);
		const timer = setTimeout(() => {
			const top = `${event.nativeEvent.offsetY}px`;
			const right = `${Number(IconWidth) - event.nativeEvent.offsetX}px`;
			setOffsetPosition(() => ({
				top,
				right
			}));
			setShow(() => true);
			clearTimeout(timer);
		}, 0);
	};

	return (
		<DropDownStyled top={top} right={right}>
			<div onClick={onClickIcon} ref={iconTarget}>
				{children}
			</div>
			<ul className={show ? 'show' : ''}>
				{data.map((el, index) => {
					return (
						<li key={`${el.title}__${index}`} onClick={el.eventName}>
							{el.title}
						</li>
					);
				})}
			</ul>
		</DropDownStyled>
	);
}

interface IDropDownStyled {
	top?: string;
	right?: string;
}
export const DropDownStyled = styled.div`
	position: relative;

	ul.show {
		display: block;
	}
	ul {
		display: none;
		position: absolute;
		top: ${({ top }: IDropDownStyled) => `${top}`};
		right: ${({ right }: IDropDownStyled) => `${right}`};
		padding: 10px 0;
		border: 1px solid var(--color-primary-dp3);
		border-radius: 4px;
		background-color: var(--color-white);
		font-weight: 700;
		z-index: 8;
	}
	ul li {
		padding: 10px 30px;
		cursor: pointer;
		position: relative;
	}
	ul li:hover::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.1;
	}
	ul li:last-child {
		color: red;
	}
`;
