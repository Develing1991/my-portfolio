import CommunityWritePagePresenter from './CommunityWritePage.presenter';
import { useState, SyntheticEvent, MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FileUrls } from './CommunityWritePage.types';
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
	// const [imageUrls, setImageUrls] = useState([]);

	const [previewImageUrls, setPreviewImageUrls] = useState<FileUrls[]>();
	const prepareImageFiles = (files: File[]) => {
		files.forEach((file) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = (event) => {
				if (event.target?.result && typeof event.target?.result === 'string')
					setPreviewImageUrls((prev) => {
						if (prev) {
							return [
								...prev,
								{
									name: String(event.target?.result),
									id: uuidv4()
								}
							];
						}
						return [
							{
								name: String(event.target?.result),
								id: uuidv4()
							}
						];
					});
				// setFiles
			};
		});
	};

	const removeImageFiles = (id: string) => () => {
		setPreviewImageUrls((prev) => {
			return prev?.filter((img) => img.id !== id);
		});
		// setFiles remove
	};

	return (
		<CommunityWritePagePresenter
			title={title}
			show={show}
			onClickSelect={onClickSelect}
			onClickSelectOption={onClickSelectOption}
			hideSelect={hideSelect}
			onSubmitForm={onSubmitForm}
			prepareImageFiles={prepareImageFiles}
			previewImageUrls={previewImageUrls}
			removeImageFiles={removeImageFiles}
		/>
	);
}
