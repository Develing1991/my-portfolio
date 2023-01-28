import CommunityWritePagePresenter from './CommunityWritePage.presenter';
import { useState, SyntheticEvent, MouseEvent, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FileUrls } from './CommunityWritePage.types';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD, UPLOAD_FILE } from './CommunityWritePage.queries';
import { IMutation, IMutationCreateBoardArgs, IMutationUploadFileArgs } from '@/src/commons/types/generated/types';
import Modal from '@/src/components/commons/modals/Modal';
import { useRouter } from 'next/router';

export default function CommunityWritePageContainer() {
	const router = useRouter();
	const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD);
	const [uploadFile] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(UPLOAD_FILE);
	const [selectSubject, setSelectSubject] = useState('선택');
	const [openModal, setOpenModal] = useState(false);
	const [moveToBoardId, setMoveToBoardId] = useState('');
	const [formData, setFormData] = useState({
		title: '',
		contents: ''
	});

	const [show, setShow] = useState(false);
	const onClickSelect = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setShow(() => true);
	};
	const onClickSelectOption = (value: string) => (event: MouseEvent<HTMLLIElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setShow(() => false);
		setSelectSubject(() => value);
	};

	const hideSelect = () => {
		setShow(() => false);
	};

	const onChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

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
									id: uuidv4(),
									file
								}
							];
						}
						return [
							{
								name: String(event.target?.result),
								id: uuidv4(),
								file
							}
						];
					});
			};
		});
	};

	const removeImageFiles = (id: string) => () => {
		setPreviewImageUrls((prev) => {
			return prev?.filter((img) => img.id !== id);
		});
	};

	const onSubmitForm = async (event: SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();
		let rsltUrls;
		if (previewImageUrls && previewImageUrls.length > 0) {
			/* eslint-disable */
			const rsltUploadAPI = previewImageUrls.map((image) => {
				return uploadFile({
					variables: {
						file: image.file
					}
				});
			});
			const rslt = await Promise.all(rsltUploadAPI);
			rsltUrls = rslt.map((el) => (el.data?.uploadFile.url ? el.data?.uploadFile.url : ''));
		}

		const { data } = await createBoard({
			variables: {
				createBoardInput: {
					...formData,
					password: '1234',
					writer: '맹구스',
					images: rsltUrls
				}
			}
		});

		if (data?.createBoard._id) {
			setOpenModal(() => true);
			setMoveToBoardId(() => data?.createBoard._id);
		}
	};

	return (
		<>
			<Modal
				title=""
				content="게시글을 작성했습니다!"
				isOpen={openModal}
				onClickOkayCancel={() => {
					setOpenModal(() => false);
					router.push(`/community/detail/${moveToBoardId}`);
				}}
			></Modal>
			<CommunityWritePagePresenter
				subject={selectSubject}
				show={show}
				onClickSelect={onClickSelect}
				onClickSelectOption={onClickSelectOption}
				hideSelect={hideSelect}
				onSubmitForm={onSubmitForm}
				prepareImageFiles={prepareImageFiles}
				previewImageUrls={previewImageUrls}
				removeImageFiles={removeImageFiles}
				onChangeInput={onChangeInput}
			/>
		</>
	);
}
