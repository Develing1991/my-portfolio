import { IBoard } from '@/src/commons/types/generated/types';
import { ChangeEvent } from 'react';

/* Container */

/* Presenter */
export interface ICommunityPagePresenterProps {
	list: IBoard[];
	keyword: string;
	onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
	onPrefetchBoard: (id: string) => () => void;
	onLoadMore: () => void;
	currPage: number;
	lastPage: number;
}

/* components.presenter/CommunityListItem */
export interface ICommunityListItemProps {
	el: IBoard;
	onPrefetchBoard: (id: string) => () => void;
}

/* components.presenter/CommunityListItemNotExist */
export interface ICommunityListItemNotExistProps {
	prevText: string;
}
