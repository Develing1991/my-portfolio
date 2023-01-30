import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as S from './DefaultHeader.styles';

export default function DefaultHeader() {
	const { push } = useRouter();
	const [hide, setHide] = useState(true);
	const toggle = () => {
		setHide((prev) => !prev);
	};
	useEffect(() => {
		window.addEventListener('resize', function () {
			setHide(() => true);
		});
	});

	const onClickMoveTo = (path: string) => () => {
		push(path);
	};

	return (
		<>
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
						<S.CustomButton reverse onClick={onClickMoveTo('/users/signin')}>
							로그인
						</S.CustomButton>
						<S.CustomButton onClick={onClickMoveTo('/users/signup')}>회원가입</S.CustomButton>
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
