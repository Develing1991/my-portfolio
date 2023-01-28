import CommunityWritePagePresenter from './CommunityWritePage.presenter';
import { useState, SyntheticEvent, MouseEvent } from 'react';
export default function CommunityWritePageContainer() {
	const onSubmitForm = (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
	};
	const [title, setTitle] = useState('선택');
	const [show, setShow] = useState(false);
	const onClickSelect = (event: MouseEvent<HTMLButtonElement>) => {
		event?.stopPropagation();
		setShow(() => true);
	};
	const onClickSelectOption = (value: string) => (event: MouseEvent<HTMLLIElement>) => {
		event?.stopPropagation();
		setShow(() => false);
		setTitle(() => value);
	};

	const hideSelect = () => {
		setShow(() => false);
	};
	return <CommunityWritePagePresenter title={title} show={show} onClickSelect={onClickSelect} onClickSelectOption={onClickSelectOption} hideSelect={hideSelect} onSubmitForm={onSubmitForm} />;
}
