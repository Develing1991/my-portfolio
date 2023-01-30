import styled from '@emotion/styled';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { css } from '@emotion/react';
export const SignIn = styled.div`
	background-color: var(--color-primary-dp2);
	height: 100vh;
	/* width: 100vw; */
	display: flex;
	align-items: center;
	justify-content: center;

	.inner {
		max-width: 400px;
		margin: auto;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 30px;
		@media screen and (max-width: 800px) {
			max-width: none;
			padding: 0 30px;
		}
		@media screen and (max-width: 360px) {
			height: auto;
			padding: 50px 20px;
		}
	}

	.signup {
		text-align: center;
		font-size: var(--font-xxlarge);
		font-weight: 700;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 100%;
	}

	label {
		font-weight: 700;
		color: var(--color-primary-dp4);
	}
	input {
		margin-top: 10px;
	}

	.signup-btn {
		margin-top: 10px;
		padding: 10px;
		font-size: var(--font-large);
	}

	.terms {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-top: 20px;
		border: 1px solid var(--color-primary-dp4);
		border-radius: 4px;
		background-color: var(--color-white);
		padding: 20px;
		font-size: var(--font-small);
		.all {
			padding-bottom: 15px;
			border-bottom: 1px solid;
			margin-bottom: 10px;
			display: flex;
			align-items: center;
			gap: 10px;
			cursor: pointer;
		}
		.term {
			margin: 5px 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 10px;
			cursor: pointer;
			@media screen and (max-width: 230px) {
				flex-direction: column;
			}

			.term__left {
				display: flex;
				gap: 10px;
				align-items: center;
			}
		}
	}

	/* .primary {
		color: var(--color-primary-dp4);
	} */
`;

const IconColor = css`
	color: var(--color-primary-dp4);
`;

export const CheckboxBlankIcon = styled(CheckBoxOutlineBlankIcon)`
	${IconColor}
`;
export const CheckboxFillIcon = styled(CheckBoxIcon)`
	${IconColor}
`;
export const MoreRightIcon = styled(ChevronRightIcon)`
	${IconColor}
`;
