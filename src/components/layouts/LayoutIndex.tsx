// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import HeadIndex from '../head/HeadIndex';
import DefaultFooter from './footers/DefaultFooter';
import DefaultHeader from './headers/DefaultHeader';
import DefaultMain from './mains/DefaultMain';

interface IPathConfig {
	path: string;
	hasProps: boolean;
	header: () => JSX.Element;
	footer: () => JSX.Element;
}

const pathConfig = [
	{ path: 'users/signin', header: () => <></>, footer: () => <></> },
	{ path: 'users/signup', header: () => <></>, footer: () => <></> },
	{ path: 'users/profile', header: () => <DefaultHeader />, footer: () => <DefaultFooter /> },
	{ path: 'community', header: () => <DefaultHeader />, footer: () => <DefaultFooter /> },
	{ path: 'community/write', header: () => <DefaultHeader />, footer: () => <DefaultFooter /> },
	{ path: 'community/write/[id]', header: () => <DefaultHeader />, footer: () => <DefaultFooter /> },
	{ path: 'community/detail/[id]', header: () => <DefaultHeader />, footer: () => <DefaultFooter /> },
	// { path: 'community', header: dynamic(async () => await import('./headers/DefaultHeader')), footer: dynamic(async () => await import('./footers/DefaultFooter')) },
	// { path: 'product', header: dynamic(async () => await import('./headers/DefaultHeader')), footer: dynamic(async () => await import('./footers/DefaultFooter')) }
	{ path: 'default', header: () => <></>, footer: () => <></> }
];

export default function LayoutIndex({ children }: { children: JSX.Element }) {
	const router = useRouter();

	const [, ...lastPathNames] = router.pathname.split('/');
	const layouts = pathConfig.find((el) => el.path === lastPathNames.join('/')) ?? pathConfig[pathConfig.length - 1];
	const { header: DynamicHeader, footer: DynamicFooter } = layouts as IPathConfig;

	return (
		<>
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
