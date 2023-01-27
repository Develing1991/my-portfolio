import styled from '@emotion/styled';
import { Button } from '@/src/components/commons/buttons/Button';
import { Inner } from '@/src/commons/styles/globalStyled.styled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
export const InnerForm = styled.div`
	${Inner}
	max-width: 1000px;
`;

export const BoardForm = styled.form`
	margin-top: 90px;
	padding: 0 30px;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const SubjectDiv = styled.div`
	width: 25%;
	@media screen and (max-width: 850px) {
		width: 50%;
	}
	@media screen and (max-width: 520px) {
		width: 100%;
	}
`;

export const TitleDiv = styled.div``;

// export const TitleInput = styled.input`
// 	width: 100%;
// 	height: 40px;
// `;

export const ContentDiv = styled.div``;

export const ContentTextArea = styled.textarea`
	width: 100%;
	height: 400px;
	border: 1px solid var(--color-primary-dp4);
	border-radius: 4px;
	font-size: var(--font-large);
	font-weight: 700;
	padding: 10px;
	color: var(--color-primary-dp4);
	&:focus {
		color: var(--color-white);
		background-color: var(--color-primary-dp3);
	}
`;

export const UploadImageDiv = styled.div`
	width: 100%;
	height: 150px;
	padding: 15px;
	border: 1px solid;
	border-radius: 4px;
	cursor: pointer;
	position: relative;
`;

export const UploadArea = styled(AddCircleOutlineIcon)`
	width: 100%;
	height: 100%;
	padding: 30px;
	border-radius: 4px;
	border: 2px dashed var(--color-primary-dp4);
	position: relative;
	color: var(--color-primary-dp4);
	&:hover {
		background-color: var(--color-primary-dp3);
	}
	@media screen and (max-width: 520px) {
		padding: 30px 0;
	}
`;
export const PlusIcon = styled(AddCircleOutlineIcon)`
	height: 50%;
	width: 50%;
`;

export const PrevImageDiv = styled.div`
	border: 1px solid var(--color-primary-dp4);
	border-radius: 4px;
	padding: 10px;
`;

export const PrevImageItem = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 4px;
	background-color: black;
	position: relative;
`;

export const CloseBadge = styled(CancelIcon)`
	width: 20px;
	height: 20px;
	position: absolute;
	top: -9px;
	right: -9px;
	cursor: pointer;
`;
export const PrevImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;
`;

export const ButtonGroupDiv = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
`;

export const RegisterButton = styled(Button)`
	width: 180px;
	padding: 15px;
	font-size: var(--font-large);
	@media screen and (max-width: 400px) {
		width: 100%;
		padding: 10px;
		font-size: var(--font-medium);
	}
`;
