import styled from '@emotion/styled';

export const SignIn = styled.div`
	background-color: var(--color-primary-dp2);
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;

	.inner {
		max-width: 350px;
		margin: auto;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 50px;
		@media screen and (max-width: 650px) {
			max-width: none;
			padding: 0 30px;
		}
		@media screen and (max-width: 360px) {
			height: auto;
			padding: 50px 20px;
		}
	}

	.signin {
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

	.signin-btn {
		padding: 10px;
		font-size: var(--font-large);
	}

	ul {
		--gap-size: 25px;
		display: flex;
		justify-content: center;
		gap: var(--gap-size);
		margin-top: 10px;
		position: relative;

		li::after {
			content: '';
			position: absolute;
			height: 15px;
			width: 1px;
			background-color: var(--color-black);
			margin-left: calc(var(--gap-size) / 2);
		}
		li:last-child::after {
			display: none;
		}
		li a {
			padding: 8px 0;
			color: var(--color-primary-dp4);
		}
	}

	.btn-group {
		display: flex;
		flex-direction: column;
		gap: 13px;

		button {
			color: var(--color-white);
			padding: 15px;
		}
		button:nth-of-type(1) {
			background-color: #fee500;
			color: var(--color-black);
		}
		button:nth-of-type(2) {
			background-color: #03c75a;
		}
		button:nth-of-type(3) {
			background-color: #1876f1;
		}
	}
`;
