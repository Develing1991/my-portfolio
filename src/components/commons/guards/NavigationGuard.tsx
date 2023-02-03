import { isLoggedState } from '@/src/commons/store';
import Modal from '@/src/components/commons/modals/Modal';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
const NavigationGuard = () => {
	// 라우터가드 추가
	const [isLogged] = useRecoilState(isLoggedState);
	const [openModal, setOpenModal] = useState(false);
	const [titleModal, setTitleModal] = useState('');
	const [conentModal, setContentModal] = useState('');
	const { push } = useRouter();

	useEffect(() => {
		if (!isLogged) {
			setOpenModal(() => true);
			setTitleModal(() => '알림');
			setContentModal(() => '로그인이 필요한 페이지 입니다.');
		}
	}, []);

	return (
		<>
			<Modal
				title={titleModal}
				content={conentModal}
				isOpen={openModal}
				onClickOkayCancel={() => {
					setOpenModal(() => false);
					setTitleModal(() => '');
					setContentModal(() => '');
					push('/users/signin');
				}}
			/>
		</>
	);
};

export default NavigationGuard;
