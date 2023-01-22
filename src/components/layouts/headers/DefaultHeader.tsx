import { useState } from 'react';
import * as S from './DefaultHeader.styles';

export default function DefaultHeader() {
	const [show, setShow] = useState(false);
	const toggle = () => {
		setShow((prev) => !prev);
	};
	return (
		<>
			<header>
				<S.Inner>
					<S.InnerHeader>
						<S.HeaderLeft>
							<S.LogoDiv>
								<S.LogoIcon />
							</S.LogoDiv>
							<S.Menu show={show}>
								<S.MenuItem>
									<S.MenuItemText className="active">커뮤니티</S.MenuItemText>
								</S.MenuItem>
								<S.MenuItem>
									<S.MenuItemText>결제</S.MenuItemText>
								</S.MenuItem>
								<S.MenuItem>
									<S.MenuItemText>회사소개</S.MenuItemText>
								</S.MenuItem>
								<S.MenuItem>
									<S.MenuItemText>프로필</S.MenuItemText>
								</S.MenuItem>
							</S.Menu>
						</S.HeaderLeft>
						<S.HeaderRight show={show}>
							<S.CustomButton reverse>로그인</S.CustomButton>
							<S.CustomButton>회원가입</S.CustomButton>
							<S.CustomButton reverse hide>
								장바구니
							</S.CustomButton>
							<S.BasketDiv>
								<S.BasketIcon />
							</S.BasketDiv>
						</S.HeaderRight>
						{/* 토글버튼 */}
						<S.ToggleButton onClick={toggle} />
					</S.InnerHeader>
				</S.Inner>
			</header>
		</>
	);
}
