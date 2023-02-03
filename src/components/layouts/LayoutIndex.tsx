// import dynamic from 'next/dynamic';

import HeadIndex from '../head/HeadIndex';
import DefaultFooter from './footers/DefaultFooter';
import DefaultHeader from './headers/DefaultHeader';
import DefaultMain from './mains/DefaultMain';
import NavigationGuard from '../commons/guards/NavigationGuard';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isLoggedState } from '@/src/commons/store';
import { useEffect } from 'react';
interface IPathConfig {
	path: string;
	auth: boolean;
	header: () => JSX.Element;
	footer: () => JSX.Element;
}

const pathConfig = [
	{ path: 'users/signin', header: () => <></>, footer: () => <></>, auth: false },
	{ path: 'users/signup', header: () => <></>, footer: () => <></>, auth: false },
	{ path: 'users/profile', header: () => <DefaultHeader />, footer: () => <DefaultFooter />, auth: true },
	{ path: 'community', header: () => <DefaultHeader />, footer: () => <DefaultFooter />, auth: false },
	{ path: 'community/write', header: () => <DefaultHeader />, footer: () => <DefaultFooter />, auth: true },
	{ path: 'community/write/[id]', header: () => <DefaultHeader />, footer: () => <DefaultFooter />, auth: true },
	{ path: 'community/detail/[id]', header: () => <DefaultHeader />, footer: () => <DefaultFooter />, auth: false },
	// { path: 'community', header: dynamic(async () => await import('./headers/DefaultHeader')), footer: dynamic(async () => await import('./footers/DefaultFooter')) },
	// { path: 'product', header: dynamic(async () => await import('./headers/DefaultHeader')), footer: dynamic(async () => await import('./footers/DefaultFooter')) }
	{ path: 'default', header: () => <></>, footer: () => <></> }
];

export default function LayoutIndex({ children }: { children: JSX.Element }) {
	const router = useRouter();
	const [isLogged] = useRecoilState(isLoggedState);
	const [, ...lastPathNames] = router.pathname.split('/');
	const layouts = pathConfig.find((el) => el.path === lastPathNames.join('/')) ?? pathConfig[pathConfig.length - 1];
	const { header: DynamicHeader, footer: DynamicFooter, auth } = layouts as IPathConfig;

	// 임시로 추가 - 메인페이지 작업 이후 삭제
	useEffect(() => {
		if (router.pathname === '/') {
			router.push('/community');
		}
	});

	if (auth && !isLogged) {
		return <NavigationGuard />;
	}
	return (
		<>
			{/* {auth && !isLogged && <NavigationGuard />} */}
			{/* head 영역 */}

			<>
				<HeadIndex />
			</>
			{/* body layout 영역 */}
			<>
				<DynamicHeader />
				<DefaultMain>{children}</DefaultMain>
				<DynamicFooter />
			</>
		</>
	);
}
