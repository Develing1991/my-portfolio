import styled from '@emotion/styled';
import { ButtonBasic } from '@/src/components/commons/Button';
import Input01 from '@/src/components/commons/Input';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';

export const BoardForm = styled.form`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const SubjectDiv = styled.div``;

export const TitleDiv = styled.div``;
export const TitleInput = styled.input`
	width: 100%;
	height: 40px;
`;

export const ContentDiv = styled.div``;
export const ContentTextArea = styled.textarea`
	width: 100%;
	height: 400px;
`;

export const UploadImageDiv = styled.div`
	width: 100%;
	height: 100px;
	border: 1px solid;
`;
export const PrevImageDiv = styled.div``;
export const PrevImageItem = styled.img``;
export const ButtonGroupDiv = styled.div``;
export const RegisterButton = styled(ButtonBasic)``;
