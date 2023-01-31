import { isLoggedState } from '@/src/commons/store';
import Modal from '@/src/components/commons/modals/Modal';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
const NavigationGuard = () => {
	// 라우터가드 추가
	const [isLogged] = useRecoilState(isLoggedState);
	const [openModal, setOpenModal] = useState(false);
	const { push } = useRouter();

	useEffect(() => {
		if (!isLogged) {
			setOpenModal(() => true);
		}
	}, []);

	return (
		<>
			<Modal
				title="알림"
				content="로그인이 필요한 페이지 입니다."
				isOpen={openModal}
				onClickOkayCancel={() => {
					setOpenModal(() => false);
					push('/users/signin');
				}}
			/>
		</>
	);
};

export default NavigationGuard;
