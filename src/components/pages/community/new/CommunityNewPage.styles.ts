import { globalColor } from '@/src/commons/styles/color.styles';
import { globalFontSize } from '@/src/commons/styles/font.styles';
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
export const SubjectSelect = styled.button`
	width: 200px;
	height: 40px;
	position: relative;
	border: 1px solid ${globalColor.primary_dp4};
	border-radius: 4px;
	font-weight: 700;
	font-size: ${globalFontSize.medium};
`;
export const SubjectSelectOptionGroup = styled.ul`
	position: absolute;
	top: 39px;
	left: -1px;
	width: 101%;
	background-color: white;
	z-index: 9;

	border: 1px solid ${globalColor.primary_dp4};
	border-radius: 4px;
	margin-top: 2px;

	padding: 5px;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;
export const SubjectSelectOption = styled.li`
	padding: 10px;
	border-radius: 4px;
	background-color: ${globalColor.primary_dp2};
	color: ${globalColor.primary_dp4};
	&:hover {
		color: ${globalColor.white};
		background-color: ${globalColor.primary_dp4};
	}
`;

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
