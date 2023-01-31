import { SignInPageYupSchema } from '@/src/commons/utils/validations/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SignInPagePresenter from './SignInPage.presenter';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './SignInPage.queries';
import { IMutation, IMutationLoginUserArgs } from '@/src/commons/types/generated/types';
import Modal from '@/src/components/commons/modals/Modal';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState, isLoggedState } from '@/src/commons/store';

const SignInPageContainer = () => {
	const [openModal, setOpenModal] = useState(false);
	const [modalText, setModalText] = useState({ title: '', content: '' });
	const [isComplete, setIsComplete] = useState(false);
	const { push } = useRouter();
	const [, setAccessTokenState] = useRecoilState(accessTokenState);
	const [, setIsLogged] = useRecoilState(isLoggedState);
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(SignInPageYupSchema),
		mode: 'onChange'
	});

	const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER);

	const onSubmitLoginUser = async (data: Record<string, string>) => {
		const { email, password } = data;
		try {
			const { data } = await loginUser({
				variables: {
					email,
					password
				}
			});

			if (data?.loginUser.accessToken) {
				setAccessTokenState(data?.loginUser.accessToken);
				setModalText(() => ({
					title: '로그인 성공',
					content: '로그인 되었습니다. 메인 페이지로 이동합니다.'
				}));
				setIsLogged(() => true);
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
						push('/community');
					}
				}}
			/>
			<SignInPagePresenter onSubmitLoginUser={onSubmitLoginUser} register={register} handleSubmit={handleSubmit} formState={formState} />
		</>
	);
};

export default SignInPageContainer;
