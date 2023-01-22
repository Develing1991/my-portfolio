import React from 'react';
import HeadIndex from '../head/HeadIndex';
import DefaultFooter from './footers/DefaultFooter';
import DefaultHeader from './headers/DefaultHeader';

export default function LayoutIndex({ children }: { children: JSX.Element }) {
	return (
		<>
			{/* head 영역 */}
			<>
				<HeadIndex />
			</>
			{/* body layout 영역 */}
			<>
				<DefaultHeader />
				{children}
				<DefaultFooter />
			</>
		</>
	);
}
