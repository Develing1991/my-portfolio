import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
interface IModal {
	title: string;
	content: string;
	isOpen?: boolean;
	isConfirm?: boolean;
	onClickConfirm: () => void;
}
export default function Modal({ title, content, isOpen = false, isConfirm = false, onClickConfirm }: IModal) {
	return (
		<ModalContainer className={'modal__wrapper' && isOpen ? 'open' : ''}>
			<div className="modal">
				<div className="header">
					<div className="title">{title}</div>
					<CloseButtonIcon className="close" />
				</div>
				<div className="content">{content}</div>
				{isConfirm ? (
					<div className="actions">
						<div className="okay" onClick={onClickConfirm}>
							확인
						</div>
						<div className="cancel">취소</div>
					</div>
				) : (
					<div className="actions">
						<div className="okay" onClick={onClickConfirm}>
							확인
						</div>
					</div>
				)}
			</div>
		</ModalContainer>
	);
}
const ModalContainer = styled.div`
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	justify-content: center;
	align-items: center;
	z-index: 20;
	&.open {
		display: flex;
	}
	.modal {
		width: 300px;
		height: 180px;
		background-color: white;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.modal .header {
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		vertical-align: bottom;
		border-bottom: 2px solid var(--color-primary-dp2);
	}
	.modal .header .title {
	}
	.modal .header .close {
		cursor: pointer;
		background-color: var(--color-primary-dp4);
		border-radius: 4px;
		color: var(--color-white);
	}
	.modal .header .close:hover {
		background-color: var(--color-red);
	}

	.modal .content {
		padding: 20px 10px 10px 10px;
		flex: 1;
	}
	.modal .actions {
		display: flex;
		padding: 10px;
		gap: 10px;
	}
	.modal .actions .okay {
		flex: 1;
		text-align: center;
		padding: 10px;
		background-color: var(--color-primary-dp4);
		color: var(--color-white);
		border-radius: 4px;
		cursor: pointer;
	}
	.modal .actions .cancel {
		flex: 1;
		text-align: center;
		padding: 10px;
		cursor: pointer;
		border: 1px solid transparent;
		border-color: var(--color-primary-dp4);
		border-radius: 4px;
	}
`;
const CloseButtonIcon = styled(CloseIcon)``;