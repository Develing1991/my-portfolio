import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isLoggedState } from '../store';
const useIsLogged = () => {
	const [, setIsLogged] = useRecoilState(isLoggedState);
	useEffect(() => {
		const getItem = localStorage.getItem('isLogged');
		if (getItem) {
			const logged = JSON.parse(getItem);
			setIsLogged(logged);
			return;
		}
		setIsLogged(false);
	});
};

export default useIsLogged;
