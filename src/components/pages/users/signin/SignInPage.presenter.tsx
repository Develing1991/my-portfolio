import { Button } from '@/src/components/commons/buttons/Button';
import { Input } from '@/src/components/commons/inputs/Input';
import React from 'react';
import { SignIn } from './SignInPage.styles';

const SignInPagePresenter = () => {
	return (
		<SignIn>
			<div className="inner">
				<div className="login">로그인</div>
				<form>
					<div className="email">
						<label htmlFor="email" />
						<Input placeholder="이메일을 입력해주세요." type="email" />
					</div>
					<div className="password">
						<label htmlFor="password" />
						<Input placeholder="비밀번호를 입력해주세요." id="password" name="password" type="password" autoComplete="off" />
					</div>
					<Button className="login-btn" reverse>
						로그인
					</Button>
					<ul>
						<li>
							{/* Link */}
							<a href="">비밀번호 재설정</a>
						</li>
						<li>
							<a href="">회원가입</a>
						</li>
					</ul>
				</form>

				<div className="btn-group">
					<Button onClick={() => false}>카카오로 시작</Button>
					<Button onClick={() => false}>네이버로 시작</Button>
					<Button onClick={() => false}>페이스북으로 시작</Button>
				</div>
			</div>
		</SignIn>
	);
};

export default SignInPagePresenter;
