import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from '@emotion/styled';
import { checkImageFileExtension } from '@/src/commons/utils/validations/image';

const Dropzone = ({ children }: { children: any }) => {
	const onDrop = useCallback((acceptedFiles) => {
		// jpg, png등 체크
		console.log(acceptedFiles);
		const isValid = acceptedFiles.every((el: File) => {
			return checkImageFileExtension(el.name);
		});
		console.log(isValid);

		// 이미지 부모 메서드 실행
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<RootDropzone {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? <Visual bgColor>{children}</Visual> : <Visual>이곳에 이미지를 드래그해 옮겨주세요.</Visual>}
		</RootDropzone>
	);
};
export default Dropzone;
const RootDropzone = styled.div`
	width: 100%;
	height: 100%;
`;
const Visual = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ bgColor }: { bgColor?: boolean }) => (bgColor ? 'var(--color-primary-dp2)' : '')};
`;
