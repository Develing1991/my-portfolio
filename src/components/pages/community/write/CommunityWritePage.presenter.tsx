import * as S from '@/src/components/pages/community/write/CommunityWritePage.styles';
import Select from '@/src/components/commons/selects/Select';
import { Input } from '@/src/components/commons/inputs/Input';
import { SyntheticEvent, MouseEvent } from 'react';
import Dropzone from '@/src/components/commons/dragdrop/Dropzone';

interface ICommunityWritePagePresenter {
	title: string;
	show: boolean;
	onClickSelect: (event: MouseEvent<HTMLButtonElement>) => void;
	onClickSelectOption: (value: string) => (event: MouseEvent<HTMLLIElement>) => void;
	onSubmitForm: (event: SyntheticEvent<HTMLFormElement>) => void;
	hideSelect: () => void;
}

export default function CommunityWritePagePresenter({ title, show, onClickSelect, onClickSelectOption, hideSelect, onSubmitForm }: ICommunityWritePagePresenter) {
	return (
		<section>
			<S.InnerForm>
				<S.BoardForm onSubmit={onSubmitForm}>
					<S.SubjectDiv>
						<Select title={title} onClickSelectOption={onClickSelectOption} onClickSelect={onClickSelect} hideSelect={hideSelect} isShow={show} opts={['궁금해요', '자유주제', '프로젝트', '기타']} />
					</S.SubjectDiv>
					<S.TitleDiv>
						<Input placeholder="제목을 입력해주세요." />
					</S.TitleDiv>
					<S.ContentDiv>
						<S.ContentTextArea />
					</S.ContentDiv>

					<S.UploadImageDiv title="여기에 사진을 올려주세요">
						<S.UploadArea>
							<Dropzone>
								<S.PlusIcon />
							</Dropzone>
						</S.UploadArea>

						{/* <S.PlusIcon /> */}
					</S.UploadImageDiv>

					<S.PrevImageDiv>
						<S.PrevImageItem>
							<S.PrevImage src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg" />
							<S.CloseBadge />
						</S.PrevImageItem>
					</S.PrevImageDiv>
					<S.ButtonGroupDiv>
						<S.RegisterButton reverse>등록</S.RegisterButton>
					</S.ButtonGroupDiv>
				</S.BoardForm>
			</S.InnerForm>
		</section>
	);
}
