import { SignInPageYupSchema } from '@/src/commons/utils/validations/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SignInPagePresenter from './SignInPage.presenter';
import { useMutation } from '@apollo/client';
import { LOGIN_USER_EXAMPLE } from './SignInPage.queries';
import { IMutation, IMutationLoginUserExampleArgs } from '@/src/commons/types/generated/types';
import Modal from '@/src/components/commons/modals/Modal';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '@/src/commons/store';

const SignInPageContainer = () => {
	const [openModal, setOpenModal] = useState(false);
	const [modalText, setModalText] = useState({ title: '', content: '' });
	const [isComplete, setIsComplete] = useState(false);
	const { push } = useRouter();
	const [, setAccessTokenState] = useRecoilState(accessTokenState);
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(SignInPageYupSchema),
		mode: 'onChange'
	});

	const [loginUserExample] = useMutation<Pick<IMutation, 'loginUserExample'>, IMutationLoginUserExampleArgs>(LOGIN_USER_EXAMPLE);

	const onSubmitLoginUser = async (data: Record<string, string>) => {
		console.log('123');
		const { email, password } = data;
		try {
			const { data } = await loginUserExample({
				variables: {
					email,
					password
				}
			});

			if (data?.loginUserExample.accessToken) {
				setAccessTokenState(data?.loginUserExample.accessToken);
				localStorage.setItem('isLogged', JSON.stringify(true));

				setModalText(() => ({
					title: '로그인 성공',
					content: '로그인 되었습니다. 메인 페이지로 이동합니다.'
				}));
				setOpenModal(() => true);
				setIsComplete(() => true);
			}
		} catch (error) {
			setModalText(() => ({
				title: '로그인 실패',
				content: error instanceof Error ? error.message : ''
			}));
			setOpenModal(() => true);
		}
	};
	return (
		<>
			<Modal
				title={modalText.title}
				content={modalText.content}
				isOpen={openModal}
				onClickOkayCancel={() => {
					setOpenModal(() => false);
					if (isComplete) {
						setIsComplete(() => false);
						push('/');
					}
				}}
			/>
			<SignInPagePresenter onSubmitLoginUser={onSubmitLoginUser} register={register} handleSubmit={handleSubmit} formState={formState} />
		</>
	);
};

export default SignInPageContainer;
