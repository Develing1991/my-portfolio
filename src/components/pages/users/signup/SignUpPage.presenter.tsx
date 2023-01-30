import { Button } from '@/src/components/commons/buttons/Button';
import { Input } from '@/src/components/commons/inputs/Input';
import React from 'react';
import { SignIn, CheckboxBlankIcon, CheckboxFillIcon, MoreRightIcon, SignUpButton } from './SignUpPage.styles';
import { ISignUpPagePresenterProps } from './SignUpPage.types';

const SignUpPagePresenter = ({ register, handleSubmit, termsCheck, onClickCheckTerms, formState: { errors, isValid }, onSubmitCreateUser }: ISignUpPagePresenterProps) => {
	return (
		<SignIn>
			<div className="inner">
				<div className="signup">회원가입</div>
				<form onSubmit={handleSubmit(onSubmitCreateUser)}>
					<div>
						<label htmlFor="email">이메일</label>
						<Input placeholder="이메일" type="email" tabIndex={1} {...register('email')} autoFocus />
						<p className="error">{errors.email?.message}</p>
						<Button reverse className="email-btn">
							이메일 인증하기
						</Button>
					</div>
					<div>
						<label htmlFor="nickName">닉네임</label>
						<Input placeholder="닉네임" type="text" id="nickName" tabIndex={2} {...register('name')} />
						<p className="error">{errors.name?.message}</p>
					</div>
					<div>
						<label htmlFor="password">비밀번호</label>
						<Input placeholder="비밀번호" type="password" id="password" autoComplete="off" tabIndex={3} {...register('password')} />
						<p className="error">{errors.password?.message}</p>
					</div>
					<div>
						<label htmlFor="password-confrim">비밀번호 확인</label>
						<Input placeholder="비밀번호 확인" type="password" id="password-confrim" autoComplete="off" tabIndex={4} {...register('passwordConfirm')} />
						<p className="error">{errors.passwordConfirm?.message}</p>
					</div>

					<div className="terms">
						<div className="all" onClick={onClickCheckTerms(0)}>
							{termsCheck[0] ? <CheckboxFillIcon /> : <CheckboxBlankIcon />}
							전체동의
						</div>
						<div className="term">
							<div className="term__left" onClick={onClickCheckTerms(1)}>
								{termsCheck[1] ? <CheckboxFillIcon /> : <CheckboxBlankIcon />}
								<div className="term__text">
									<span className="required">(필수)</span> 만 14세 이상입니다
								</div>
							</div>
						</div>
						<div className="term">
							<div className="term__left" onClick={onClickCheckTerms(2)}>
								{termsCheck[2] ? <CheckboxFillIcon /> : <CheckboxBlankIcon />}
								<div className="term__text">
									<span className="required">(필수)</span> 이용약관
								</div>
							</div>
							<MoreRightIcon />
						</div>
						<div className="term">
							<div className="term__left" onClick={onClickCheckTerms(3)}>
								{termsCheck[3] ? <CheckboxFillIcon /> : <CheckboxBlankIcon />}
								<div className="term__text">
									<span className="required">(필수)</span> 개인정보수집 및 이용동의
								</div>
							</div>
							<MoreRightIcon />
						</div>
						<div className="term">
							<div className="term__left" onClick={onClickCheckTerms(4)}>
								{termsCheck[4] ? <CheckboxFillIcon /> : <CheckboxBlankIcon />}
								<div className="term__text">
									<span>(선택)</span> 개인정보 마케팅 활용 동의
								</div>
							</div>
							<MoreRightIcon />
						</div>
						<div className="term">
							<div className="term__left" onClick={onClickCheckTerms(5)}>
								{termsCheck[5] ? <CheckboxFillIcon /> : <CheckboxBlankIcon />}
								<div className="term__text">
									<span>(선택)</span> 이벤트, 쿠폰, 메일 및 SMS 등 수신
								</div>
							</div>
							<MoreRightIcon />
						</div>
					</div>
					<SignUpButton className="signup-btn" reverse disabled={!isValid}>
						회원가입
					</SignUpButton>
				</form>
			</div>
		</SignIn>
	);
};

export default SignUpPagePresenter;
