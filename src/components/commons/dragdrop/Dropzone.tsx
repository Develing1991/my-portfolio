import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from '@emotion/styled';
import { checkImageFileExtension } from '@/src/commons/utils/validations/image';
import Modal from '../modals/Modal';
interface IDropzone {
	children: any;
	prepareImageFiles: (files: File[]) => void;
}

const Dropzone = ({ children, prepareImageFiles }: IDropzone) => {
	const [isValid, setIsValid] = useState(true);
	const onDrop = useCallback((acceptedFiles) => {
		// jpg, png등 체크
		const valid = acceptedFiles.every((el: File) => {
			return checkImageFileExtension(el.name);
		});
		setIsValid(() => valid);
		if (valid) prepareImageFiles(acceptedFiles);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, disabled: false });

	return (
		<>
			<Modal
				title="알림"
				content="이미지 형식이 올바르지 않습니다."
				isOpen={!isValid}
				onClickOkayCancel={() => {
					setIsValid(true);
				}}
			/>
			<RootDropzone {...getRootProps()}>
				<input {...getInputProps()} />
				{isDragActive ? <Visual bgColor>{children}</Visual> : <Visual>클릭 또는 이곳에 이미지를 드래그해 옮겨주세요.</Visual>}
			</RootDropzone>
		</>
	);
};
export default Dropzone;
const RootDropzone = styled.div`
	width: 100%;
	height: 100%;
`;
const Visual = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ bgColor }: { bgColor?: boolean }) => (bgColor ? 'var(--color-primary-dp2)' : '')};
	/* @media screen {
    
  } */
	text-align: center;
`;
