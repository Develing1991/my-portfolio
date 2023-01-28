import { SyntheticEvent, MouseEvent, ChangeEvent } from 'react';

export interface FileUrls {
	name: string;
	id: string;
	file: File;
}

/* Presenter */
export interface ICommunityWritePagePresenter {
	subject: string;
	show: boolean;
	onClickSelect: (event: MouseEvent<HTMLButtonElement>) => void;
	onClickSelectOption: (value: string) => (event: MouseEvent<HTMLLIElement>) => void;
	onSubmitForm: (event: SyntheticEvent<HTMLButtonElement>) => void;
	hideSelect: () => void;
	prepareImageFiles: (files: File[]) => void;
	previewImageUrls: FileUrls[] | undefined;
	removeImageFiles: (id: string) => () => void;
	onChangeInput: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
