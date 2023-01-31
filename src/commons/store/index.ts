import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const keywordState = atom({
	key: 'keywordState',
	default: ''
});

export const accessTokenState = atom({
	key: 'accessTokenState',
	default: ''
});

export const isLoggedState = atom({
	key: 'isLoggedState',
	default: false,
	effects_UNSTABLE: [persistAtom]
});
