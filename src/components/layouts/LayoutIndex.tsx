import React from 'react';
import HeadIndex from '../head/HeadIndex';
import DefaultFooter from './footers/DefaultFooter';
import DefaultHeader from './headers/DefaultHeader';
import DefaultMain from './mains/DefaultMain';

/* border-radius: 4px; */
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
				<DefaultMain>{children}</DefaultMain>
				<DefaultFooter />
			</>
		</>
	);
}
