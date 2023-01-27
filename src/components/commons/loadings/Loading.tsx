import styled from '@emotion/styled';
export default function Loading() {
	return <LoadingBar>Loading</LoadingBar>;
}
export const LoadingBar = styled.div`
	width: 50px;
	height: 50px;
	border: 5px solid var(--color-primary-dp4);
	border-radius: 50%;
	position: relative;
	animation: identifier 1s linear 0s infinite;
	margin: auto;
	&::after {
		content: '';
		position: absolute;
		top: -10px;
		right: -10px;
		width: 70%;
		height: 70%;
		background-color: white;
	}
	@keyframes identifier {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
