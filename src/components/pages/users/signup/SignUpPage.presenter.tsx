import { Button } from '@/src/components/commons/buttons/Button';
import { Input } from '@/src/components/commons/inputs/Input';
import React from 'react';
import { SignIn, CheckboxBlankIcon, CheckboxFillIcon, MoreRightIcon } from './SignUpPage.styles';

const SignUpPagePresenter = () => {
	return (
		<SignIn>
			<div className="inner">
				<div className="signup">회원가입</div>
				<form>
					<div>
						<label htmlFor="email">이메일</label>
						<Input placeholder="이메일" type="email" tabIndex={2} />
						<Button reverse className="email-btn">
							이메일 인증하기
						</Button>
					</div>
					<div>
						<label htmlFor="nickName">닉네임</label>
						<Input placeholder="닉네임" type="text" id="nickName" tabIndex={1} />
					</div>
					<div>
						<label htmlFor="password">비밀번호</label>
						<Input placeholder="비밀번호" id="password" name="password" type="password" autoComplete="off" tabIndex={3} />
					</div>
					<div>
						<label htmlFor="password-confrim">비밀번호 확인</label>
						<Input placeholder="비밀번호 확인" id="password-confrim" name="password-confrim" type="password" autoComplete="off" tabIndex={4} />
					</div>

					<div className="terms">
						<div className="all">
							<CheckboxBlankIcon />
							{/* <CheckboxFillIcon /> */}
							전체동의
						</div>
						<div className="term">
							<div className="term__left">
								<CheckboxBlankIcon />
								{/* <CheckboxFillIcon /> */}
								<div className="term__text">
									<span>(필수)</span> 만 14세 이상입니다
								</div>
							</div>
						</div>
						<div className="term">
							<div className="term__left">
								<CheckboxBlankIcon />
								{/* <CheckboxFillIcon /> */}
								<div className="term__text">
									<span>(필수)</span> 이용약관
								</div>
							</div>
							<MoreRightIcon />
						</div>
						<div className="term">
							<div className="term__left">
								<CheckboxBlankIcon />
								{/* <CheckboxFillIcon /> */}
								<div className="term__text">
									<span>(필수)</span> 개인정보수집 및 이용동의
								</div>
							</div>
							<MoreRightIcon />
						</div>
						<div className="term">
							<div className="term__left">
								<CheckboxBlankIcon />
								{/* <CheckboxFillIcon /> */}
								<div className="term__text">
									<span>(선택)</span> 개인정보 마케팅 활용 동의
								</div>
							</div>
							<MoreRightIcon />
						</div>
						<div className="term">
							<div className="term__left">
								<CheckboxBlankIcon />
								{/* <CheckboxFillIcon /> */}
								<div className="term__text">
									<span>(선택)</span> 이벤트, 쿠폰, 메일 및 SMS 등 수신
								</div>
							</div>
							<MoreRightIcon />
						</div>
					</div>
					<Button className="signup-btn" reverse>
						회원가입
					</Button>
				</form>
			</div>
		</SignIn>
	);
};

export default SignUpPagePresenter;
