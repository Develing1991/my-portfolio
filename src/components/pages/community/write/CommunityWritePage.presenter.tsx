import * as S from '@/src/components/pages/community/write/CommunityWritePage.styles';
import { useState, useEffect, SyntheticEvent, MouseEvent } from 'react';
import SelectBasic01 from '@/src/components/commons/selects/Select';
import { Input } from '@/src/components/commons/inputs/Input';

export default function CommunityWritePagePresenter() {
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

	useEffect(() => {
		window.addEventListener('click', function () {
			setShow(() => false);
		});
		window.addEventListener('resize', () => {
			setShow(() => false);
		});
	});

	return (
		<section>
			<S.InnerForm>
				<S.BoardForm onSubmit={onSubmitForm}>
					<S.SubjectDiv className="subject">
						<SelectBasic01 title={title} onClickSelectOption={onClickSelectOption} onClickSelect={onClickSelect} isShow={show} opts={['궁금해요', '자유주제', '프로젝트', '기타']} />
					</S.SubjectDiv>
					<S.TitleDiv className="title">
						<Input />
					</S.TitleDiv>
					<S.ContentDiv className="content">
						<S.ContentTextArea name="" id="" cols="30" rows="10" />
					</S.ContentDiv>
					<S.UploadImageDiv className="uploadzone" title="여기에 사진을 올려주세요">
						<S.UploadArea>
							<S.PlusIcon />
						</S.UploadArea>
						{/* <S.PlusIcon /> */}
					</S.UploadImageDiv>
					<S.PrevImageDiv className="previewImage">
						<S.PrevImageItem>
							<S.PrevImage src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg" />
							<S.CloseBadge />
						</S.PrevImageItem>
					</S.PrevImageDiv>
					<S.ButtonGroupDiv className="btn">
						<S.RegisterButton reverse>등록</S.RegisterButton>
					</S.ButtonGroupDiv>
				</S.BoardForm>
			</S.InnerForm>
		</section>
	);
}
