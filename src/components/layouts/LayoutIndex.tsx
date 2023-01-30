// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import HeadIndex from '../head/HeadIndex';
import DefaultFooter from './footers/DefaultFooter';
import DefaultHeader from './headers/DefaultHeader';
import DefaultMain from './mains/DefaultMain';

interface IPathConfig {
	path: string;
	header: () => JSX.Element;
	footer: () => JSX.Element;
}

const pathConfig = [
	{ path: 'users', header: () => <></>, footer: () => <></> },
	{ path: 'community', header: () => <DefaultHeader />, footer: () => <DefaultFooter /> }
	// { path: 'community', header: dynamic(async () => await import('./headers/DefaultHeader')), footer: dynamic(async () => await import('./footers/DefaultFooter')) },
	// { path: 'product', header: dynamic(async () => await import('./headers/DefaultHeader')), footer: dynamic(async () => await import('./footers/DefaultFooter')) }
];

export default function LayoutIndex({ children }: { children: JSX.Element }) {
	const router = useRouter();
	const layouts = pathConfig.find((el) => el.path === router.pathname.split('/')[1]);
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
