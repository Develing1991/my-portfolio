import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SignUpPagePresenter from './SignUpPage.presenter';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal from '@/src/components/commons/modals/Modal';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from './SignUpPage..queries';
import { IMutation, IMutationCreateUserArgs } from '@/src/commons/types/generated/types';

const schema = yup.object({
	email: yup.string().email('이메일 형식이 올바르지 않습니다').required('이메일을 입력해주세요'),
	name: yup.string().required('닉네임을 입력해주세요'),
	password: yup
		.string()
		.required('비밀번호를 입력해주세요')
		.matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,20}$/, { message: '영문, 숫자, 특수문자를 조합한 10자리 이상 20자리 이하 비밀번호를 입력해 주세요. ' }),
	passwordConfirm: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
});

const SignUpPageContainer = () => {
	const [termsCheck, setTermsCheck] = useState(new Array(6).fill(false));
	const [openModal, setOpenModal] = useState(false);
	const [modalText, setModalText] = useState({ title: '', content: '' });
	const [isComplete, setIsComplete] = useState(false);
	const { push } = useRouter();
	const [createUser] = useMutation<Pick<IMutation, 'createUser'>, IMutationCreateUserArgs>(CREATE_USER);

	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange'
	});
	// trigger, setValue

	const onClickCheckTerms = (index: number) => () => {
		if (index === 0) {
			setTermsCheck((prev) => new Array(6).fill(!prev[0]));
			return;
		}
		setTermsCheck((prev) => {
			const newTermsCheck = [...prev];
			newTermsCheck[index] = !newTermsCheck[index];
			return newTermsCheck;
		});
	};

	const onSubmitCreateUser = async (data: Record<string, string>) => {
		const [, required1, required2, required3] = termsCheck;
		if (!required1 || !required2 || !required3) {
			setModalText(() => ({
				title: '약관동의',
				content: '필수 약관동의를 체크해주세요'
			}));
			setOpenModal(() => true);
			return;
		}
		try {
			const { name, email, password } = data;
			await createUser({
				variables: {
					createUserInput: {
						name,
						email,
						password
					}
				}
			});
			setModalText(() => ({
				title: '가입완료',
				content: '회원가입 되었습니다. 로그인 페이지로 이동합니다.'
			}));
			setOpenModal(() => true);
			setIsComplete(() => true);
		} catch (error) {
			setModalText(() => ({
				title: '가입실패',
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
					setOpenModal(false);
					if (isComplete) push('/users/signin');
				}}
			/>
			<SignUpPagePresenter
				register={register}
				handleSubmit={handleSubmit}
				formState={formState}
				onSubmitCreateUser={onSubmitCreateUser}
				termsCheck={termsCheck}
				onClickCheckTerms={onClickCheckTerms}
			/>
		</>
	);
};

export default SignUpPageContainer;
