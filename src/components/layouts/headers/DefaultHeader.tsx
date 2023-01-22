import { Button } from '../../commons/Button';
import * as S from './DefaultHeader.styles';

export default function DefaultHeader() {
	return (
		<>
			<header>
				<S.Inner>
					<S.InnerHeader>
						<S.HeaderLeft>
							<S.LogoDiv>
								<S.LogoIcon />
							</S.LogoDiv>
							<S.Menu>
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
						<S.HeaderRight>
							<Button reverse>로그인</Button>
							<Button>회원가입</Button>
							<S.BasketDiv>
								<S.BasketIcon />
							</S.BasketDiv>
						</S.HeaderRight>
					</S.InnerHeader>
				</S.Inner>
			</header>
		</>
	);
}
