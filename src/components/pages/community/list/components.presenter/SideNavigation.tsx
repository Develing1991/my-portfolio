import * as S from '@/src/components/pages/community/list/CommunityListPage.styles';
import { memo } from 'react';
const SideNavigation = () => {
	return (
		<S.Navigation>
			<S.NaviMenu>
				<S.NaviMenuItem>
					<S.NaviMenuItemText>궁금해요</S.NaviMenuItemText>
				</S.NaviMenuItem>
				<S.NaviMenuItem>
					<S.NaviMenuItemText>자유주제</S.NaviMenuItemText>
				</S.NaviMenuItem>
				<S.NaviMenuItem>
					<S.NaviMenuItemText>프로젝트</S.NaviMenuItemText>
				</S.NaviMenuItem>
				<S.NaviMenuItem>
					<S.NaviMenuItemText>기타</S.NaviMenuItemText>
				</S.NaviMenuItem>
			</S.NaviMenu>
		</S.Navigation>
	);
};
export default memo(SideNavigation);
