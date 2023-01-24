import * as S from '@/src/components/pages/community/new/CommunityNewPage.styles';
import { Inner } from '@/src/commons/styles/global.styles';
import { useState, useEffect, SyntheticEvent, MouseEvent } from 'react';
import SelectBasic01 from '@/src/components/commons/selects/SelectBasic01';

export default function CommunityNewPagePresenter() {
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
	});

	return (
		<section>
			<Inner>
				<S.BoardForm onSubmit={onSubmitForm}>
					<S.SubjectDiv className="subject">
						<div style={{ width: '20%' }}>
							<SelectBasic01 title={title} onClickSelectOption={onClickSelectOption} onClickSelect={onClickSelect} isShow={show} opts={['궁금해요', '자유주제', '프로젝트', '기타']} />
						</div>
					</S.SubjectDiv>
					<S.TitleDiv className="title">
						<S.TitleInput type="text" />
					</S.TitleDiv>
					<S.ContentDiv className="content">
						<S.ContentTextArea name="" id="" cols="30" rows="10" />
					</S.ContentDiv>
					<S.UploadImageDiv className="uploadzone" />
					<S.PrevImageDiv className="previewImage">
						<S.PrevImageItem />
					</S.PrevImageDiv>
					<S.ButtonGroupDiv className="btn">
						<S.RegisterButton reverse>등록</S.RegisterButton>
					</S.ButtonGroupDiv>
				</S.BoardForm>
			</Inner>
		</section>
	);
}
