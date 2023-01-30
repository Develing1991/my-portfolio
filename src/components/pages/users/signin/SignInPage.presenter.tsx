import { Button } from '@/src/components/commons/buttons/Button';
import { Input } from '@/src/components/commons/inputs/Input';
import Link from 'next/link';
import React from 'react';
import { SignIn } from './SignInPage.styles';
import { ISignInPagePresenterProps } from './SignInPage.types';

const SignInPagePresenter = ({ onSubmitLoginUser, handleSubmit, register, formState: { errors, isValid } }: ISignInPagePresenterProps) => {
	return (
		<SignIn>
			<div className="inner">
				<div className="signin">로그인</div>
				<form onSubmit={handleSubmit(onSubmitLoginUser)}>
					<div className="email">
						<label htmlFor="email" />
						<Input placeholder="이메일을 입력해주세요." type="email" tabIndex={1} autoFocus {...register('email')} />
						<p className="error">{errors.email?.message}</p>
					</div>
					<div className="password">
						<label htmlFor="password" />
						<Input placeholder="비밀번호를 입력해주세요." id="password" type="password" autoComplete="off" tabIndex={2} {...register('password')} />
						<p className="error">{errors.password?.message}</p>
					</div>
					<Button className="signin-btn" reverse tabIndex={3}>
						로그인
					</Button>
					<ul>
						<li>
							<Link href={'/users/signin'}>비밀번호 재설정</Link>
						</li>
						<li>
							<Link href={'/users/signup'}>회원가입</Link>
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
