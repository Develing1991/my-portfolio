import * as S from '@/src/components/pages/community/write/CommunityWritePage.styles';
import Select from '@/src/components/commons/selects/Select';
import { Input } from '@/src/components/commons/inputs/Input';
import Dropzone from '@/src/components/commons/dragdrop/Dropzone';
import { ICommunityWritePagePresenter } from './CommunityWritePage.types';

export default function CommunityWritePagePresenter({
	subject,
	show,
	onClickSelect,
	onClickSelectOption,
	hideSelect,
	onSubmitForm,
	prepareImageFiles,
	previewImageUrls,
	removeImageFiles,
	onChangeInput
}: ICommunityWritePagePresenter) {
	return (
		<section>
			<S.InnerForm>
				<S.BoardForm onSubmit={() => false}>
					<S.SubjectDiv>
						<Select title={subject} onClickSelectOption={onClickSelectOption} onClickSelect={onClickSelect} hideSelect={hideSelect} isShow={show} opts={['궁금해요', '자유주제', '프로젝트', '기타']} />
					</S.SubjectDiv>
					<S.TitleDiv>
						<Input placeholder="제목을 입력해주세요." name="title" onChange={onChangeInput} />
					</S.TitleDiv>
					<S.ContentDiv>
						<S.ContentTextArea name="contents" onChange={onChangeInput} />
					</S.ContentDiv>
					<S.UploadImageDiv title="여기에 사진을 올려주세요">
						<S.UploadArea>
							<Dropzone prepareImageFiles={prepareImageFiles}>
								<S.PlusIcon />
							</Dropzone>
						</S.UploadArea>
						{/* <S.PlusIcon /> */}
					</S.UploadImageDiv>
					{previewImageUrls && previewImageUrls.length > 0 && (
						<S.PrevImageDiv>
							{previewImageUrls.map((el) => {
								return (
									<S.PrevImageItem key={el.id}>
										<S.PrevImage src={el.name} />
										<S.CloseBadge onClick={removeImageFiles(el.id)} />
									</S.PrevImageItem>
								);
							})}
						</S.PrevImageDiv>
					)}
					<S.ButtonGroupDiv>
						<S.RegisterButton reverse onClick={onSubmitForm}>
							등록
						</S.RegisterButton>
					</S.ButtonGroupDiv>
				</S.BoardForm>
			</S.InnerForm>
		</section>
	);
}
