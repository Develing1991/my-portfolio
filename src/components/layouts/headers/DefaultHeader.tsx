import * as S from './DefaultHeader.styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState, isLoggedState } from '@/src/commons/store';
import { useMutation } from '@apollo/client';
import { LOGOUT_USER } from '../../pages/users/signin/SignInPage.queries';
import Modal from '../../commons/modals/Modal';

export default function DefaultHeader() {
	const { push } = useRouter();
	const [hide, setHide] = useState(true);
	const [isLogged, setIsLogged] = useRecoilState(isLoggedState);
	const [, setAccessToken] = useRecoilState(accessTokenState);
	const [logoutUser] = useMutation(LOGOUT_USER);
	const [openModal, setOpenModal] = useState(false);
	//
	const onClickLogout = () => {
		localStorage.removeItem('isLogged');
		setOpenModal(() => true);
		setIsLogged(() => false);
		setAccessToken(() => '');
		logoutUser();
	};

	const toggle = () => {
		setHide((prev) => !prev);
	};

	const onClickMoveTo = (path: string) => () => {
		push(path);
	};

	return (
		<>
			<Modal
				title="알림"
				content="로그아웃 되었습니다."
				isOpen={openModal}
				onClickOkayCancel={() => {
					setOpenModal(() => false);
					push('/community');
				}}
			/>
			<header>
				<S.InnerHeader>
					<S.HeaderLeft>
						<S.LogoDiv>
							<S.LogoImage src="/logo.png" alt="로고 이미지" />
						</S.LogoDiv>
						<S.Menu className={hide ? 'hide' : ''}>
							<S.MenuItem className="active">
								<Link href={'/community'}>커뮤니티</Link>
							</S.MenuItem>
							<S.MenuItem>
								<Link href={'/community'}>결제</Link>
							</S.MenuItem>
							<S.MenuItem>
								<Link href={'/community'}>회사소개</Link>
							</S.MenuItem>
							<S.MenuItem>
								<Link href={'/community'}>프로필</Link>
							</S.MenuItem>
						</S.Menu>
					</S.HeaderLeft>
					<S.HeaderRight className={hide ? 'hide' : ''}>
						{!isLogged ? (
							<>
								<S.CustomButton reverse onClick={onClickMoveTo('/users/signin')}>
									로그인
								</S.CustomButton>
								<S.CustomButton onClick={onClickMoveTo('/users/signup')}>회원가입</S.CustomButton>
							</>
						) : (
							<S.CustomButton reverse onClick={onClickLogout}>
								로그아웃
							</S.CustomButton>
						)}
						<S.CustomButton reverse hide>
							장바구니
						</S.CustomButton>
						<S.BasketDiv>
							<S.BasketIcon />
						</S.BasketDiv>
					</S.HeaderRight>
					{/* 토글 */}
					<S.ToggleIcon onClick={toggle} />
				</S.InnerHeader>
			</header>
		</>
	);
}
