import { IBoard } from '@/src/commons/types/generated/types';
import { ChangeEvent } from 'react';

/* Container */

/* Presenter */
export interface ICommunityPagePresenterProps {
	list: IBoard[];
	keyword: string;
	onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
	onLoadMore: () => void;
}

/* components.presenter/CommunityListItem */
export interface ICommunityListItemProps {
	el: IBoard;
}

/* components.presenter/CommunityListItemNotExist */
